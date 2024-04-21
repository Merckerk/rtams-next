import { connectToDB } from "@utils/database";
import Course from "@models/courseModel";
import { getToken } from "next-auth/jwt";

export const POST = async (req, res) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    const reqBody = await req.json();

    const { courseName, courseCode } = reqBody;

    const courseNameCheck = await Course.findOne({ courseName });
    const courseCodeCheck = await Course.findOne({ courseCode });

    if (courseNameCheck) {
      return new Response("Course Name already exists.", { status: 400 });
    }

    if (courseCodeCheck) {
      return new Response("Course Name already exists.", { status: 400 });
    }

    const newCourse = new Course({
      courseName,
      courseCode,
    });

    const savedCourse = await newCourse.save();

    return new Response(JSON.stringify(newCourse), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Course.", { status: 500 });
  }
};
