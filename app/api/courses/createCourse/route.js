import { connectToDB } from "@utils/database";
import Course from "@models/courseModel";
export const POST = async (req) => {
  const { userId, course, students, days } = await req.json();
  try {
    await connectToDB();
    const newCourse = new Course({ professor: userId, course, students, days });
    await newCourse.save();
    return new Response(JSON.stringify(newCourse), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Course.", { status: 500 });
  }
};
