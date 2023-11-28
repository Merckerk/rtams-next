import AttendanceReport from "@models/attendanceModel";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const attendanceReports = AttendanceReport.find();

    return new Response(JSON.stringify(attendanceReports));
  } catch (error) {
    return new Response(
      "Failed to fetch attendance reports from the database.",
      { status: 500 }
    );
  }
};
