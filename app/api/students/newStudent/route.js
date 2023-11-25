import { connectToDB } from "@utils/database";
import Student from "@models/studentModel";
import bcryptjs from "bcryptjs";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const reqBody = await req.json();
    const {
      image,
      studentNumber,
      nfcUID,
      email,
      name,
      username,
      password,
      section,
      load,
    } = reqBody;

    const studentNumberCheck = await Student.findOne({ studentNumber });
    const studentEmailCheck = await Student.findOne({ email });
    const studentNFCCheck = await Student.findOne({ nfcUID });
    const studentUsernameCheck = await Student.findOne({ username });

    if (studentNumberCheck) {
      return res
        .status(400)
        .json({ message: "Student Number already exists." });
    }

    if (studentEmailCheck) {
      return res.status(400).json({ message: "Email already exists." });
    }

    if (studentNFCCheck) {
      return res
        .status(400)
        .json({ message: "Your NFC UID already exists in the database." });
    }

    if (studentUsernameCheck) {
      return res.status(400).json({ message: "Username already exists." });
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
      load,
    });

    const savedUser = await newStudent.save();
    return res
      .status(201)
      .json({ message: "Student created successfully", user: savedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: `Failed to create a Student account. ${error.message || 'Internal Server Error'}`,
    });
  }
};
