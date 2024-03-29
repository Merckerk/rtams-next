import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";
import Student from "@models/studentModel";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const reqBody = await req.json();
    const { nfcUID, courseCode, section, term } = reqBody;

    // Find the student based on the NFC UID
    const student = await Student.findOne({ nfcUID });
    if (!student) {
      return new Response("Student not found for the given NFC UID.", {
        status: 404,
      });
    }

    // Get the current date and format it
    const currentDate = new Date();
    const formattedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );

    // Get the current time
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    // Check if there is an existing attendance for the same student, course, and date
    let existingAttendance = await Attendances.findOne({
      student: student._id,
      courseCode,
      date: formattedDate,
    });

    if (existingAttendance) {
      // If there is an existing attendance, update the timeOut if it's not already set
      if (existingAttendance.timeIn && !existingAttendance.timeOut) {
        existingAttendance.timeOut = currentTime;
        await existingAttendance.save();
        return new Response("Updated attendance report.", { status: 200 });
      }
    } else {
      // If no existing attendance, create a new attendance report
      const newReport = new Attendances({
        student: student._id,
        nfcUID: student.nfcUID,
        studentName: student.name,
        courseCode,
        date: formattedDate,
        term,
        section,
        timeIn: currentTime, // Set timeIn when creating a new report
        timeOut: null, // Initialize timeOut as null
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
