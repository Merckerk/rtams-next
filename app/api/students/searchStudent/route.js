import Student from "@models/studentModel";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const student = await Student.findById({ name: params.id }).populate(
      "name"
    );
  } catch (error) {}
};
