import { NextResponse } from "next/server";
import Classlist from "@models/classModel";
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
    const classlists = await Classlist.find(
      {
        user: params.id,
      },
      { _id: 1, sectionCode: 1, subjectCode: 1, subjectDescription: 1, term: 1 }
    );

    // res.setHeader('Cache-Control', 'no-store, must-revalidate');
    const returnValue = {
      message: "Classlist Retrieval Successful",
      data: classlists,
    };
    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch admin users.", { status: 500 });
  }
};
