import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";

// Function to extract query parameters from URL
const getQueryParams = (url) => {
  const params = new URLSearchParams(url.split('?')[1]);
  return Object.fromEntries(params.entries());
};

// GET attendances by course, section, term
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const queryParams = getQueryParams(req.url); // Extract query parameters
    const courseCode = queryParams.courseCode;
    const section = queryParams.section;
    const term = queryParams.term;

    console.log("courseCode:", courseCode);
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

    return new Response(JSON.stringify(attendances), { status: 200 });
    
  } catch (error) {
    console.error("Error getting attendances:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get attendances" }),
      { status: 500 }
    );
  }
};