import { connectToDB } from "@utils/database";
import User from "@models/userModel";
import bcryptjs from "bcryptjs";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const { image, name, userId, username, password } = reqBody;

    const userIdCheck = await User.findOne({ userId });
    const userNameCheck = await User.findOne({ username });

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
      image,
      name,
      userId,
      username,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return new Response("Successfully created an account.", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create an account.", { status: 500 });
  }
};
