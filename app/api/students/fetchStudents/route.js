import Student from "@models/studentModel";
import Section from "@enums/section";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    const Students = await Student.find({}, { studentNumber: 1, name: 1, section: 1 }).populate("section");

    return new Response(JSON.stringify(Students), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch students from the database.", {
      status: 500,
    });
  }
};
