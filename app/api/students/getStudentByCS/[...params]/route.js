import Student from "@models/studentModel";
import { connectToDB } from "@utils/database";

// GET attendances by course, section, term
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    // const queryParams = new URLSearchParams(req.url.split('?')[1]); // Extract query parameters
    // const courseCode = queryParams.get('courseCode');
    // const section = queryParams.get('section');
    // // const term = queryParams.get('term');

    // // console.log("courseCode:", courseCode);
    // // console.log("section:", section);
    // // console.log("term:", term);

    const courseCode = params.params[0];
    const section = params.params[1];

    console.log("courseCode frm studnt:", courseCode);
    console.log("section frm studnt:", section);

    if (!courseCode || !section) {
      return new Response("Incomplete Payload", { status: 400 });
    }

    // Fetch the attendances based on courseCode, section, term
    const students = await Student.find({
        load: { $all: [courseCode] }, 
        section: { $in: section },
      }, { image: 0 });

    if (!students) {
      return new Response("Students Not Found.", { status: 404 });
    }

    return new Response(JSON.stringify(students), { status: 200 });
    // return new Response(JSON.stringify({message: "gud"}), { status: 200 });
    
  } catch (error) {
    console.error("Error getting students:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get students" }),
      { status: 500 }
    );
  }
};
