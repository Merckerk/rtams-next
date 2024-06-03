import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";
import Student from "@models/studentModel";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    const attendanceReports = await Attendances.find().populate({path: "student", select: "name"});

    return new Response(JSON.stringify(attendanceReports.reverse()));
  } catch (error) {
    return new Response(
      "Failed to fetch attendance reports from the database.",
      { status: 500 }
    );
  }
};
