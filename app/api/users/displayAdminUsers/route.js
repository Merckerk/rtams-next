import { NextResponse } from "next/server";
import User from "@models/userModel";
import { connectToDB } from "@utils/database";

connectToDB();

export const GET = async (req, res) => {
  try {
    //Find all users that are Admins
    const adminUsers = await User.find({ isAdmin: true }, "username email");

    return new Response(JSON.stringify(adminUsers), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch admin users.", { status: 500 });
  }
};
