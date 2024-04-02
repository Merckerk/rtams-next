import { NextResponse } from "next/server";
import Classlist from "@models/classModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const {
      user,
      sectionCode,
      subjectCode,
      subjectDescription,
      term,
      schedule,
      students,
    } = reqBody;

    const newClasslist = new Classlist({
      user,
      sectionCode,
      subjectCode,
      subjectDescription,
      term,
      schedule,
      students,
    });

    const savedClasslist = await newClasslist.save();

    const responseValue = {
      success: true,
      message: "Successfully created classlist",
      savedClasslist: savedClasslist,
    };

    return new Response(JSON.stringify(responseValue), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to create classlist.", { status: 500 });
  }
};
