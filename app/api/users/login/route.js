import { connectToDB } from "@utils/database";
import User from "@models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectToDB();

export const POST = async (req, res) => {
  try {
    const reqBody = await req.json();
    const { email, userId, username, password, isAdmin } = reqBody;

    //Debugging, delete in production
    console.log(reqBody);

    //Check if email exists
    const userEmail = await User.findOne({ email });

    //Check if userID exists
    const userID = await User.findOne({ userId });

    if (!userEmail) {
      return new Response("Email does not exist.", { status: 400 });
    }

    if (!userID) {
      return new Response("UserID does not exist.", { status: 401 });
    }

    //Check password if correct
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return new Response("Invalid Password.", { status: 401 });
    }

    //Create token data
    const tokenData = {
      id: userID._id,
      email: userID.email,
      UID: userID.userId,
    };

    //Create the token
  } catch (error) {}
};
