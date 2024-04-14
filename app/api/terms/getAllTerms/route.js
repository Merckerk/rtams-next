import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Term from "@models/termModel";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const terms = await Term.find();

    const returnValue = {
      message: "Registered Terms Retrieval Successful",
      data: terms,
    };
    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch terms.", { status: 500 });
  }
};
