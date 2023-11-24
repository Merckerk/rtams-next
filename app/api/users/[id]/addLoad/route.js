import User from "@models/userModel";
import { connectToDB } from "@utils/database";

export const PATCH = async (req, { params }) => {
  const { load } = await req.json();
  try {
    await connectToDB();

    const user = await User.findById(params.id);
    if (!user) return new Response("User not found", { status: 404 });

    user.load = load;

    const savedUser = await user.save();
    return new Response(JSON.stringify(savedUser), { status: 200 });
  } catch (error) {
    console.error("Error editing load:", error);
    return new Response("Failed to edit load.", { status: 500 });
  }
};
