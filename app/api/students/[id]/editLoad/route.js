import Student from "@models/studentModel";
import { connectToDB } from "@utils/database";

export const PATCH = async (req, { params }) => {
  try {
    await connectToDB();

    const { load } = await req.json();
    
    const student = await Student.findById(params.id);
    if (!student) return new Response("Student not found", { status: 404 });

    student.load = student.load || [];
    student.load = [...load];
    const savedStudent = await student.save();
    return new Response(JSON.stringify(savedStudent), { status: 200 });
  } catch (error) {
    console.error("Error editing load:", error);
    return new Response("Failed to edit load.", { status: 500 });
  }
};
