import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";
import Student from "@models/studentModel";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const reqBody = await req.json();
    const { nfcUID, course } = reqBody;

    // Find the student based on the NFC UID
    const student = await Student.findOne({ nfcUID });
    if (!student) {
      return new Response("Student not found for the given NFC UID.", {
        status: 404,
      });
    }


    // Get the current date and format it
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}:${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}:${currentDate.getDate().toString().padStart(2, "0")}`;

    // Get the current time
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    // Check if there is an existing attendance for the same student, course, and date
    let existingAttendance = await Attendances.findOne({
      student: student._id,
      course,
      date: formattedDate,
    });

    if (existingAttendance) {
      // If there is an existing attendance, update the timeOut if it's not already set
      if (existingAttendance.timeIn && !existingAttendance.timeOut) {
        existingAttendance.timeOut = currentTime;
        const timeIn = new Date(existingAttendance.timeIn);
        const timeOut = new Date(existingAttendance.timeOut);
        const hoursRendered = (timeOut - timeIn) / (1000 * 60 * 60);
        existingAttendance.hoursRendered = hoursRendered;
        await existingAttendance.save();
        return new Response("Updated attendance report.", { status: 200 });
      }
    } else {
      // If no existing attendance, create a new attendance report
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
  }
};
