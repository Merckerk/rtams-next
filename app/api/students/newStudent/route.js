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
      gender,
      mobileNumber,
      placeOfBirth,
      residentialAddress,
      permanentAddress,
      nameOfSpouse,
    } = reqBody;

    const studentNumberCheck = await Student.findOne({ studentNumber });
    const studentEmailCheck = await Student.findOne({ email });
    const studentNFCCheck = await Student.findOne({ nfcUID });
    const studentUsernameCheck = await Student.findOne({ username });

    let validityCheck = true;
    let errors = {
      studentNumber: "",
      nfcUID: "",
      email: "",
      name: "",
      username: "",
      password: "",
      gender: "",
    }

    if (studentNumberCheck) {
      errors.studentNumber = "Student Number already exist"
    }
    if (studentEmailCheck) {
      errors.email = "Student email already exist"
    }
    if (studentNFCCheck) {
      errors.nfcUID = "Student NFC already exist"
    }
    if (studentUsernameCheck) {
      return new Response("Student Username already exist", { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newStudent = new Student({
      image,
      studentNumber,
      nfcUID,
      email,
      name,
      username,
      password: hashedPassword,
      section,
      load,
      gender,
      mobileNumber,
      placeOfBirth,
      residentialAddress,
      permanentAddress,
      nameOfSpouse,
    });

    const savedStudent = await newStudent.save();
    return new Response("Successfully created a student.", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a student", { status: 500 });
  }
};
