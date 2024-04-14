import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Section from "@models/sectionModel";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
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
