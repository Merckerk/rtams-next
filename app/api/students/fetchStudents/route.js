import Student from "@models/studentModel";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const Students = await Student.find();

    return new Response(JSON.stringify(Students));
  } catch (error) {
    return new Response("Failed to fetch students from the database.", {
      status: 500,
    });
  }
};
