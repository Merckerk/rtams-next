import Course from "@models/courseModel";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    // connect to mongoDB
    await connectToDB();

    // select all courses from the database
    const Courses = await Course.find();

    // return the results
    return new Response(JSON.stringify(Courses));
  } catch (error) {
    return new Response("Failed to fetch courses from the database.", {
      status: 500,
    });
  }
};
