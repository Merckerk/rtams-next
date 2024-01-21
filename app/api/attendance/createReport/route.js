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

    // Check if there is an existing attendance for the same student, course, and date
    const existingAttendance = await Attendances.findOne({
      student: student._id,
      courseCode,
      date: formattedDate,
    });

    if (existingAttendance) {
      console.log("attendance is existing already.");
      return new Response(
        "Attendance report already exists for the same student, course, and date.",
        {
          status: 409, // Conflict
        }
      );
    }

    // If no existing attendance, create a new attendance report
    const newReport = new Attendances({
      student: student._id,
      courseCode,
      date: formattedDate,
      time: currentTime,
      term,
      section,
    });

    const savedReport = await newReport.save();

    return new Response(JSON.stringify(savedReport), { status: 201 });
  } catch (error) {
    console.error("Error generating attendance report.", error)
    return new Response("Failed to generate an attendance report.", {
      status: 500,
    });
  }
};
