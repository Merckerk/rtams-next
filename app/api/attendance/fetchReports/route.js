import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const attendanceReports = Attendances.find();

    return new Response(JSON.stringify(attendanceReports));
  } catch (error) {
    return new Response(
      "Failed to fetch attendance reports from the database.",
      { status: 500 }
    );
  }
};
