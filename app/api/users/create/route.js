import { connectToDB } from "@utils/database";
import User from "@models/userModel";
import bcryptjs from "bcryptjs";

connectToDB();

export const POST = async (req, res) => {
  try {
    const reqBody = await req.json();
    const { email, userId, username, password, isAdmin } = reqBody;

    console.log(reqBody);

    //Check if email exists
    const userEmailCheck = await User.findOne({ email });

    //Check if userID exists
    const userIdCheck = await User.findOne({ userId });

    //Check if username exists
    const userNameCheck = await User.findOne({ username });

    if (userEmailCheck) {
      return new Response("Email already exists.", { status: 400 });
    }

    if (userIdCheck) {
      return new Response("UserID already exists.", { status: 400 });
    }

    if (userNameCheck) {
      return new Response("Username already exists.", { status: 400 });
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //create user
    const newUser = new User({
      email,
      userId,
      username,
      password: hashedPassword,
      isAdmin,
    });

    const savedUser = await newUser.save();
    console.log(savedUser); //delete in production

    if (newUser.isAdmin) {
      return new Response("Created as admin", { status: 201 });
    }
    return new Response("Successfully created an account.", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create an account.", { status: 500 });
  }
};
