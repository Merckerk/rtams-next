import { connectToDB } from "@utils/database";
import User from "@models/userModel";
import bcryptjs from "bcryptjs";
import { getToken } from "next-auth/jwt";

export const POST = async (req, res) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();
    const reqBody = await req.json();
    const { image, name, userId, email, username, password, role } = reqBody;

    const errors = {};
    const requiredFields = [
      "userId",
      "email",
      "username",
      "password",
    ];

    for (const field of requiredFields){
      if (!reqBody[field]) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
      }
    }

    const [
      userIdCheck,
      userNameCheck,
      emailCheck,
    ] = await Promise.all([
      User.findOne({ userId }),
      User.findOne({ username }),
      User.findOne({ email }),
    ]);

    if (userIdCheck) errors.userId = "User Id already exist."
    if (userNameCheck) errors.username = "Username already exist."
    if (emailCheck) errors.email = "Email already exist."


    if (Object.keys(errors).length > 0) {
      console.log("gg");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid Fields",
          errors: errors,
        }),
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      image,
      name,
      userId,
      email,
      username,
      password: hashedPassword,
      role,
    });

    const savedUser = await newUser.save();

    return new Response("Successfully created an account.", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create an account.", { status: 500 });
  }
};
