import Audits from "@models/auditModel";
import User from "@models/userModel";
import { connectToDB } from "@utils/database";
import bcryptjs from "bcryptjs";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    const user = await User.findById(params.id);
    if (!user) return new Response("User Not Found.", { status: 404 });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error.", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });

  const reqBody = await req.json();
  const { image, userId, email, username, password, name, audit, role } =
    reqBody;
  
  console.log("Recieved:", reqBody);

  try {
    await connectToDB();
    const existingUser = await User.findById(params.id);

    if (!existingUser) return new Response("User not found", { status: 404 });

    if (existingUser.userId == "owners") {
      return new Response("Cannot edit/update this user.", { status: 500 });
    }

    const errors = {};
    const requiredFields = ["userId", "email", "username"];

    for (const field of requiredFields) {
      if (!reqBody[field]) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
      }
    }

    const [userIdCheck, userNameCheck, emailCheck] = await Promise.all([
      User.findOne({ userId }),
      User.findOne({ username }),
      User.findOne({ email }),
    ]);

    if (userIdCheck && userIdCheck._id.toString() !== params.id) {
      errors.userId = "User Id already exist.";
    }
    if (userNameCheck && userNameCheck._id.toString() !== params.id) {
      errors.username = "Username already exist.";
    }
    if (emailCheck && emailCheck._id.toString() !== params.id) {
      errors.email = "Email already exist.";
    }

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

    const oldData = {
      image: existingUser?.image,
      name: existingUser?.name,
      userId: existingUser?.userId,
      email: existingUser?.email,
      username: existingUser?.username,
      password: existingUser?.password,
      role: existingUser?.role,
    };

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = !password ? "" : await bcryptjs.hash(password, salt);

    existingUser.image = image;
    existingUser.name = name;
    existingUser.userId = userId;
    existingUser.email = email;
    existingUser.username = username;
    existingUser.password = hashedPassword || existingUser.password;
    existingUser.role = role;

    await existingUser.save();

    const auditData = {
      target: "user",
      description: audit,
      oldData: oldData,
      newData: existingUser.toObject(),
    };
    const auditRecord = new Audits(auditData);
    await auditRecord.save();

    const combinedResponse = {
      updatedUser: existingUser,
      audit: auditRecord,
    };
    return new Response(JSON.stringify(combinedResponse), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user.", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
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
