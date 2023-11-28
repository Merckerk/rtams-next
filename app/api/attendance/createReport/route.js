import { connectToDB } from "@utils/database";
import AttendanceReport from "@models/attendanceModel";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const reqBody = await req.json();

    const { studentNumber, name, section, nfcUID, dateTime, courseCode, term } =
      reqBody;

    const newAttendanceReport = new AttendanceReport({
      studentNumber,
      name,
      section,
      nfcUID,
      dateTime,
      courseCode,
      term,
    });

    const savedAttendanceReport = await newAttendanceReport.save();

    return new Response(JSON.stringify(newAttendanceReport), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate an attendance report.", {
      status: 500,
    });
  }
};
