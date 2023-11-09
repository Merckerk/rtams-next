import { extractDataFromToken } from "@helpers/extractDataFromToken";
import { NextResponse } from "next/server";
import User from "@models/userModel";
import { connectToDB } from "@utils/database";

connectToDB();

export async function GET(request) {
  try {
    const userID = await extractDataFromToken(request);
    const user = await User.findOne({ _id: userID }).select("-password");
    return NextResponse.json({
      message: "User found.",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
