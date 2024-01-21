import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";

export const GET = async (req, { params, query }) => {
  try {
    await connectToDB();

    const requestedDate = new Date(query.date);

    const attendanceReports = await Attendances.find({
      date: {
        $lt: new Date(requestedDate.getTime() + 24 * 60 * 60 * 1000),
      },
    });

    return new Response(JSON.stringify(attendanceReports), { status: 200 });
  } catch (error) {
    console.error("Error retrieving attendance reports by date:", error);
    return new Response("Internal server error.", { status: 500 });
  }
};
