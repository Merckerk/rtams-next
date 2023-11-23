import Student from "@models/studentModel";
import { connectToDB } from "@utils/database";
import bcryptjs from "bcryptjs";

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
  const { studentNumber, nfcUID, image, email, username, password, section } =
    await req.json();

  try {
    await connectToDB();

    const existingStudent = await Student.findById(params.id);

    if (!existingStudent)
      return new Response("Student not found", { status: 404 });

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    existingStudent.studentNumber = studentNumber;
    existingStudent.nfcUID = nfcUID;
    existingStudent.image = image;
    existingStudent.email = email;
    existingStudent.username = username;
    existingStudent.password = hashedPassword;
    existingStudent.section = section;

    await existingStudent.save();
    return new response(JSON.stringify(existingStudent), { status: 200 });
  } catch (error) {
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
