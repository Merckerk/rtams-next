import User from "@models/userModel";
import { connectToDB } from "@utils/database";
import bcryptjs from "bcryptjs";

export const GET = async (req, { params }) => {
  try {
    connectToDB();

    //Find the user according to user_id sent by client
    const user = await User.findById(params.id);
    if (!user) return new Response("User Not Found.", { status: 404 });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error.", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { image, email, userId, username, password, isAdmin } =
    await req.json();
  try {
    await connectToDB();
    // Find and update the user with the new data
    const existingUser = await User.findById(params.id);

    if (!existingUser) return new Response("User not found", { status: 404 });

    //re-hash password here
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // Response if user is updated successfully
    existingUser.image = image;
    existingUser.email = email;
    existingUser.userId = userId;
    existingUser.username = username;
    existingUser.password = hashedPassword;
    existingUser.isAdmin = isAdmin;

    await existingUser.save();
    return new Response(JSON.stringify(existingUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user.", { status: 500 });
  }
};
