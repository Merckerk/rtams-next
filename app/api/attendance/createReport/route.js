import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";
import Student from "@models/studentModel";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const reqBody = await req.json();

    const { nfcUID, courseCode, section, term } = reqBody;

    const student = await Student.findOne({ nfcUID });
    if (!student) {
      return new Response("Student not found for the given NFC UID.", {
        status: 404,
      });
    }

    const currentDate = new Date();
    const formattedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    var timeIn;
    var timeOut;

    // TODO: Create new api endpoint for timeOut
    // TODO: get single attendance (object that contains boolean and string)
    // if attendanceIsExisting.data.doesExist, patch (timeOut), else post(timeIn)
    // Check if there is an existing attendance for the same student, course, and date
    var existingAttendance = await Attendances.findOne({
      student: student._id,
      studentName: student.name,
      courseCode,
      date: formattedDate,
    });
    console.log(existingAttendance);

    if (existingAttendance) {
      console.log("meron lods");
      if (!existingAttendance.timeIn && !existingAttendance.timeOut) {
        console.log("hindi pa nagttap");
        timeIn = currentTime;
      } else if (existingAttendance.timeIn && !existingAttendance.timeOut) {
        console.log("bounce na lods");
        timeOut = currentTime;
        // const timeOut = { ...existingAttendance, timeOut: timeOut };
        // await timeOut.save();
        // await existingAttendance.remove();
        // existingAttendance = { ...existingAttendance, timeOut: timeOut };
        // await existingAttendance.save();

        // return new Response("Attendance successfully created.", {
        //   status: 200,
        // });
      } else if (existingAttendance.timeIn && existingAttendance.timeOut) {
        console.log("tapos ka na lods");
        console.log("Existing attendance entry.");

        return new Response(
          "Attendance report already exists for the same student, course, and date.",
          { status: 409 }
        );
      }
    } else {
      timeIn = currentTime;
    }

    // If no existing attendance, create a new attendance report
    const newReport = new Attendances({
      student: student._id,
      studentName: student.name,
      courseCode,
      date: formattedDate,
      term,
      section,
      timeIn,
      timeOut,
    });

    const savedReport = await newReport.save();

    return new Response(JSON.stringify(savedReport), { status: 201 });
  } catch (error) {
    console.error("Error generating attendance report.", error);
    return new Response("Failed to generate an attendance report.", {
      status: 500,
    });
  }
};
