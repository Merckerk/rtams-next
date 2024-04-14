import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Term from "@models/termModel";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const reqBody = await req.json();

    const { term } = reqBody;

    if (!term) {
      return new Response("Incomplete payload.", { status: 500 });
    }

    const newTerm = new Term({ term });

    const savedTerm = await newTerm.save();

    const responseValue = {
      success: true,
      message: "Successfully registered Term",
      savedTerm: savedTerm,
    };

    return new Response(JSON.stringify(responseValue), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to register term.", { status: 500 });
  }
};
