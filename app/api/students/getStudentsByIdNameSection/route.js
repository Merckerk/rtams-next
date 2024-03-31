import { NextResponse } from "next/server";
import Student from "@models/studentModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const users = await Student.find({}, { _id: 1, studentNumber: 1, name: 1, section: 1 });

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch users.", { status: 500 });
  }
};
