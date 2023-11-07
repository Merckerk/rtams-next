import { connectToDB } from "@utils/database";
import User from "@models/userModel";
import bcryptjs from "bcryptjs";

connectToDB();

export const POST = async (req, res) => {
  try {
    const reqBody = await req.json();
    const { email, userId ,username, password, isAdmin } = reqBody;

    console.log(reqBody);

    //Check if user exist
    const user = await User.findOne({ email });

    if (user) {
      return new Response("User email already exist", { status: 400 });
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
      return new Response("Successfully created admin", { status: 201 });
    }
    return new Response("Successfully created user", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to Create admin account", { status: 500 });
  }
};
