import Course from "@models/courseModel";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    // Find the course according to professor/userId and indicate who the professor is
    const course = await Course.findById({ professor: params.id }).populate(
      "professor"
    );

    if (!course) return new Response("Course not found.", { status: 404 });

    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch courses.", { status: 500 });
  }
};
