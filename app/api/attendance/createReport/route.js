import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";
import Student from "@models/studentModel";
import Classlist from "@models/classModel";
import User from "@models/userModel";
import { getToken } from "next-auth/jwt";
import Session from "@models/sessionModel";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const POST = async (req, res) => {
  const t0 = performance.now();
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    const reqBody = await req.json();
    const { nfcUID, course } = reqBody;

    console.log("course:", course);

    const student = await Student.findOne({ nfcUID });
    const session = await Session.find({ classlist: course, checked: false });
    const classlist = await Classlist.findOne({ _id: course });

    if (!student) {
      return new Response("Student not found for the given NFC UID.", {
        status: 404,
      });
    }

    if (!classlist) {
      return new Response("Classlist not found", { status: 404 });
    }

    console.log("class faculty:", classlist);

    if (!classlist.students.includes(student._id)) {
      return new Response("Student not enrolled in this course", {
        status: 500,
      });
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}:${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}:${currentDate.getDate().toString().padStart(2, "0")}`;

    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    let existingAttendance = await Attendances.findOne({
      student: student._id,
      course,
      date: formattedDate,
    });

    if (session.length === 0) {
      console.log("making new session");
      const newSession = new Session({
        classlist: course,
        date: formattedDate,
        checked: false,
      });
      const savedSession = await newSession.save();
      console.log("new session:", savedSession);
    }

    if (existingAttendance) {
      if (existingAttendance.timeIn && !existingAttendance.timeOut) {
        existingAttendance.timeOut = currentTime;
        const timeInParts = existingAttendance.timeIn.split(":");
        const timeOutParts = existingAttendance.timeOut.split(":");

        const timeInDate = new Date();
        timeInDate.setHours(parseInt(timeInParts[0]));
        timeInDate.setMinutes(parseInt(timeInParts[1]));

        const timeOutDate = new Date();
        timeOutDate.setHours(parseInt(timeOutParts[0]));
        timeOutDate.setMinutes(parseInt(timeOutParts[1]));

        const millisecondsDifference = timeOutDate - timeInDate;
        const minutesRendered = millisecondsDifference / (1000 * 60); // Convert milliseconds to minutes

        existingAttendance.hoursRendered = minutesRendered;

        await existingAttendance.save();
        return new Response("Updated attendance report.", { status: 200 });
      }
    } else {
      const newReport = new Attendances({
        student: student._id,
        nfcUID: student.nfcUID,
        studentName: student.name,
        course: course,
        date: formattedDate,
        timeIn: currentTime,
        timeOut: null,
      });

      const savedReport = await newReport.save();
      return new Response(JSON.stringify(savedReport), { status: 201 });
    }
  } catch (error) {
    console.error("Error generating attendance report.", error);
    return new Response("Failed to generate an attendance report.", {
      status: 500,
    });
  } finally {
    const t1 = performance.now();
    console.log(`performance metric: ${t1 - t0} mills`);
  }
};
