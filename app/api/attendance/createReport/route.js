import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const reqBody = await req.json();

    const { nfcUID, date, courseCode } = reqBody;

    const newReport = new Attendances({
      nfcUID,
      courseCode,
      date,
    });

    const savedReport = await newReport.save();

    return new Response(JSON.stringify(newAttendanceReport), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate an attendance report.", {
      status: 500,
    });
  }
};
