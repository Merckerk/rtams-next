import { connectToDB } from "@utils/database";
import Student from "@models/studentModel";
import bcryptjs from "bcryptjs";
import { unstable_createMuiStrictModeTheme } from "@mui/material";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const {
      studentNumber,
      nfcUID,
      image,
      email,
      name,
      username,
      password,
      section,
    } = reqBody;

    const studentNumberCheck = await Student.findOne({ studentNumber });
    const studentEmailCheck = await Student.findOne({ email });
    const studentNFCCheck = await Student.findOne({ nfcUID });
    const studentUsernameCheck = await Student.findOne({ username });

    if (studentNumberCheck) {
      return new Response("Student Number already exists.", { status: 400 });
    }

    if (studentEmailCheck) {
      return new Response("Email already exists.", { status: 400 });
    }

    if (studentNFCCheck) {
      return new Response("Your NFC UID already exists in the database.", {
        status: 400,
      });
    }

    if (studentUsernameCheck) {
      return new Response("Username already exists.", { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newStudent = new Student({
      studentNumber,
      nfcUID,
      image,
      email,
      name,
      username,
      password: hashedPassword,
      section,
    });

    const savedUser = await newStudent.save();
  } catch (error) {
    return new Response("Failed to create a Student account.");
  }
};
