import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Section from "@models/sectionModel";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const reqBody = await req.json();

    const { section } = reqBody;

    if (!section) {
      return new Response("Incomplete payload.", { status: 500 });
    }

    const newTerm = new Section({ section });

    const savedTerm = await newTerm.save();

    const responseValue = {
      success: true,
      message: "Successfully registered Term",
      savedTerm: savedTerm,
    };

    return new Response(JSON.stringify(responseValue), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to register Section.", { status: 500 });
  }
};
