import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const report = await Attendances.findById({
      date: params.id,
    }).populate("date");

    if (!report)
      return new Response("Attendance Report not found.", { status: 404 });
  } catch (error) {
    return new Response("Failed to find the Attendance Report.", {
      status: 500,
    });
  }
};
