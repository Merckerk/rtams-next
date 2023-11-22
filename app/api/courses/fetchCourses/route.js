import Course from "@models/userModel";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    // connect to mongoDB
    await connectToDB();

    // select all courses from the database
    const Courses = await Course.find();

    // return the results
    return new Response(JSON.stringify(Courses));
  } catch (error) {}
};