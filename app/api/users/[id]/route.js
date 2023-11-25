import User from "@models/userModel";
import { connectToDB } from "@utils/database";
import bcryptjs from "bcryptjs";

// GET user
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    //Find the user according to user_id sent by client
    const user = await User.findById(params.id);
    if (!user) return new Response("User Not Found.", { status: 404 });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error.", { status: 500 });
  }
};

// EDIT/UPDATE user
export const PATCH = async (req, { params }) => {
  const { image, email, userId, username, password, name, load } =
    await req.json();
  try {
    await connectToDB();
    // Find and update the user with the new data
    const existingUser = await User.findById(params.id);

    if (!existingUser) return new Response("User not found", { status: 404 });

    if (existingUser.userId == "owners") {
      return new Response("Cannot edit/update this user.", { status: 500 });
    }

    //re-hash password here
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = !password ? '' : await bcryptjs.hash(password, salt);

    // Response if user is updated successfully
    existingUser.image = image;
    existingUser.email = email;
    existingUser.name = name;
    existingUser.userId = userId;
    existingUser.username = username;
    existingUser.password = hashedPassword || existingUser.password;
    existingUser.load = load;

    await existingUser.save();
    return new Response(JSON.stringify(existingUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user.", { status: 500 });
  }
};

// DELETE user
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    if (User.findById(params.id).userId == "owners")
      return new Response("Cannot delete this user.", { status: 500 });

    await User.findByIdAndRemove(params.id);

    return new Response("User deleted successfully.", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the user.", { status: 500 });
  }
};
