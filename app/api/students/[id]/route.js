import Student from "@models/studentModel";
import Audits from "@models/auditModel";
import { connectToDB } from "@utils/database";
import bcryptjs from "bcryptjs";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

// GET student
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const student = await Student.findById(params.id);
    if (!student) return new Response("Student not found.", { status: 404 });

    return new Response(JSON.stringify(student), { status: 200 });
  } catch (error) {
    return new Response("Internal server error.", { status: 500 });
  }
};

// EDIT/UPDATE student
export const PATCH = async (req, { params }) => {
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
    audit,
  } = await req.json();

  try {
    await connectToDB();

    const existingStudent = await Student.findById(params.id);

    if (!audit) return new Response("Please enter reason for edit");

    if (!existingStudent) {
      console.log("student doesn't exist");
      return new Response("Student not found", { status: 404 });
    }

    const oldData = {
      image: existingStudent.image,
      studentNumber: existingStudent.studentNumber,
      nfcUID: existingStudent.nfcUID,
      email: existingStudent.email,
      name: existingStudent.name,
      username: existingStudent.username,
      password: existingStudent.password,
      section: existingStudent.section,
      load: existingStudent.load,
      gender: existingStudent.gender,
      mobileNumber: existingStudent.mobileNumber,
      placeOfBirth: existingStudent.placeOfBirth,
      residentialAddress: existingStudent.residentialAddress,
      permanentAddress: existingStudent.permanentAddress,
      nameOfSpouse: existingStudent.nameOfSpouse,
    };

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = !password ? "" : await bcryptjs.hash(password, salt);

    existingStudent.image = image;
    existingStudent.studentNumber = studentNumber;
    existingStudent.nfcUID = nfcUID;
    existingStudent.email = email;
    existingStudent.name = name;
    existingStudent.username = username;
    existingStudent.password = hashedPassword || existingStudent.password;
    existingStudent.section = section;
    existingStudent.load = load;
    existingStudent.gender = gender;
    existingStudent.mobileNumber = mobileNumber;
    existingStudent.placeOfBirth = placeOfBirth;
    existingStudent.residentialAddress = residentialAddress;
    existingStudent.permanentAddress = permanentAddress;
    existingStudent.nameOfSpouse = nameOfSpouse;

    await existingStudent.save();

    const auditData = {
      target: "student",
      description: audit,
      oldData: oldData,
      newData: existingStudent.toObject()
    }

    const auditRecord = new Audits(auditData);
    await auditRecord.save();
    const combinedResponse = {
      updatedStudent: existingStudent,
      audit: auditRecord
    };
    return new Response(JSON.stringify(combinedResponse), { status: 200 });
  } catch (error) {
    console.log("Error in patch endpoint");
    return new Response("Failed to update student information.", {
      status: 500,
    });
  }
};

// DELETE student
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Student.findByIdAndRemove(params.id);

    return new Response("Student successfully removed from the database.", {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to remove student from the database.", {
      status: 500,
    });
  }
};
