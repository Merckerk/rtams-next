import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Term from "@models/termModel";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
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
