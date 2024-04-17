import { NextResponse } from "next/server";
import User from "@models/userModel";
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
    const adminUsers = await User.find({ /* Your admin filter condition */ }, { _id: 1, name: 1 });

    // res.setHeader('Cache-Control', 'no-store, must-revalidate');
    return new Response(JSON.stringify(adminUsers), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch admin users.", { status: 500 });
  }
};
