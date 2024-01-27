import Course from "@models/courseModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
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
