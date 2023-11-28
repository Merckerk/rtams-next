import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const report = await Attendances.findById({
      name: params.id,
      dateTime: params.id,
    }).populate("name", "dateTime");

    if (!report)
      return new Response("Attendance Report not found.", { status: 404 });
  } catch (error) {
    return new Response("Failed to find the Attendance Report.", {
      status: 500,
    });
  }
};
