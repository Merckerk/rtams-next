import Student from "@models/studentModel";
import Section from "@enums/section";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  const token = await getToken({ req });
  if (!token || token.role !== "Admin") {
    console.log("Access denied: invalid role");
    return new Response("heh. Nice try, guy! >:DD", { status: 403 });
  }

  try {
    await connectToDB();

    const Students = await Student.find({}, { image: 0 }).populate("section");

    return new Response(JSON.stringify(Students), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch students from the database.", {
      status: 500,
    });
  }
};
