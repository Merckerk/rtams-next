import { connectToDB } from "@utils/database";
import User from "@models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

connectToDB();

//TODO: Expand on Login Tokens
export const POST = async (req, res) => {
  try {
    const reqBody = await req.json();
    const { username, password } = reqBody;

    //Debugging, delete in production
    console.log(reqBody);

    //Check if username exists
    const user = await User.findOne({ username });

    //Error handling if username does not exist
    if (!user) {
      return new Response("Username does not exist.", { status: 402 });
    }

    //Check password if correct
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return new Response("Invalid Password.", { status: 401 });
    }

    //Create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      isAdmin: user.isAdmin,
    };

    //Create the token
    const token = await jwt.sign(tokenData, process.env.JWT_TOKEN, {
      expiresIn: "12h",
    });

    const response = NextResponse.json({
      message: "Login successful.",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error) {
    console.log(error); //delete in production
    return new Response("Failed to Login.", { status: 500 });
  }
};
