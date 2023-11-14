import User from "@models/userModel";
import { connectToDB } from "@utils/database";

connectToDB();

// export const GET = async (req, res) => {
//   try {
//     // Wait for request from the client for the user id
//     const user_id = await req.json();

//     // Find the user according to user_id sent by client
//     const user = await User.findOne({ _id: user_id, isAdmin: true });

//     // Response if no user is found
//     if (!user) {
//       return new Response("User not found.", { status: 404 });
//     }

//     // Response if user is found
//     return new Response(JSON.stringify(user), { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new Response("Failed to fetch user id.", { status: 500 });
//   }
// };

export const PATCH = async (req, res) => {
  try {
    // Wait for the request from the client for the user id and updated data
    const { user_id, newUsername, newEmail } = await req.json();

    // Find and update the user with the new data
    const updatedUser = await User.findByIdAndUpdate(
      user_id,
      { username: newUsername, email: newEmail },
      { new: true }
    );

    // Response if no user is found
    if (!updatedUser) {
      return new Response("User not found.", { status: 404 });
    }

    // Response if user is updated successfully
    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user.", { status: 500 });
  }
};
