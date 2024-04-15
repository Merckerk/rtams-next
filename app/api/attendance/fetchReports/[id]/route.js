import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const attendanceReports = await Attendances.find({
      "classlist.user": params.id,
    });

    return new Response(JSON.stringify(attendanceReports));
  } catch (error) {
    return new Response(
      "Failed to fetch attendance reports from the database.",
      { status: 500 }
    );
  }
};
