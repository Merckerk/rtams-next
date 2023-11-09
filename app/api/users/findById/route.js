import User from "@models/userModel";
import { connectToDB } from "@utils/database";

connectToDB();

export const GET = async (req, res) => {
  try {
    //Wait for request from the client for the user id
    const user_id = await req.json();

    //Find the user according to user_id sent by client
    const user = await User.findOne({ _id: user_id, isAdmin: true });

    //Response if no user is found
    if (!user) {
      return new Response("User not found.", { status: 404 });
    }

    //Response if user is found
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch user id.", { status: 500 });
  }
};
