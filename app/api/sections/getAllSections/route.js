import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Section from "@models/sectionModel";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();
    const sections = await Section.find();

    const returnValue = {
      message: "Registered Sections Retrieval Successful",
      data: sections,
    };
    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch sections.", { status: 500 });
  }
};
