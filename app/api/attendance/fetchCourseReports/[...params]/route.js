import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";

//GET attendances by course, section, term
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    
    const courseCode = params.params[0];
    const section = params.params[1];
    const term = params.params[2];
    console.log("course Code:", courseCode);
    console.log("section:", section);
    console.log("term:", term);

    if (!courseCode || !section || !term) {
      return new Response("Incomplete Payload", { status: 400 });
    }

    // Fetch the attendances based on courseCode, section, term
    const attendances = await Attendances.find({
      courseCode: { $in: courseCode },
      section: { $in: section },
      term: { $in: term },
    });

    if (!attendances) {
      return new Response("Attendances Not Found.", { status: 404 });
    }
    console.log("attendances", attendances)

    return new Response(JSON.stringify(attendances), { status: 200 });
    // return new Response(JSON.stringify({ message: "gud" }), { status: 200 });
  } catch (error) {
    console.error("Error getting attendances:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get attendances" }),
      { status: 500 }
    );
  }
};
// export const GET = async (req, { params }) => {
//   try {
//     await connectToDB();

//     console.log(params.id);
//     console.log(params.id[0]);
//     console.log(params.id[1]);
//     return new Response(JSON.stringify({message: "good"}, { status: 200}));

//     // const student = await Student.findById(params.id);
//     // if (!student) return new Response("Student not found.", { status: 404 });

//     // return new Response(JSON.stringify(student), { status: 200 });
//   } catch (error) {
//     return new Response("Internal server error.", { status: 500 });
//   }
// };
