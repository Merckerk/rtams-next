import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
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
