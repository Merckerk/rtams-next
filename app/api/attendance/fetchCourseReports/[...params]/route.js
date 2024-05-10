import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

//GET attendances by course, section, term
export const GET = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    const courseCode = params.params[0];
    const section = params.params[1];
    const term = params.params[2];

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
    // return new Response(JSON.stringify({ message: "gud" }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to get attendances" }),
      { status: 500 }
    );
  }
};
