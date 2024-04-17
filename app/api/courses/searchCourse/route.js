import Course from "@models/courseModel";
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
