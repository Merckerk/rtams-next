import Attendances from "@models/attendanceModel";
import Classlist from "@models/classModel";
import User from "@models/userModel";
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

    const attendanceReports = await Attendances.find().populate("course");

    const filteredReports = attendanceReports.filter((report) => {
      return report?.course?.user?.toString() === params?.id?.toString();
    });


    return new Response(JSON.stringify(filteredReports));
  } catch (error) {
    return new Response(
      "Failed to fetch attendance reports from the database.",
      { status: 500 }
    );
  }
};
