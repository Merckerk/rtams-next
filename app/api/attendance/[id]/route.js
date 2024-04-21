import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
// GET reports
export const GET = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    const report = await Attendances.findById(params.id);
    if (!report)
      return new Response("No attendance report found", { status: 404 });
  } catch (error) {}
};

// EDIT/UPDATE reports
export const PATCH = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  const { nfcUID, date, courseCode } = await req.json();
  try {
    await connectToDB();

    const existingReport = await Attendances.findById(params.id);

    if (!existingReport)
      return new Response("Attendance Report not found.", { status: 404 });

    existingReport.nfcUID = nfcUID;
    existingReport.date = date;
    existingReport.courseCode = courseCode;

    await existingReport.save();

    return new Response(JSON.stringify(existingReport), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the report.");
  }
};

// DELETE reports
export const DELETE = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    await Attendances.findByIdAndRemove(params.id);

    return new Response("Attendance Report deleted successfully.", {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to delete course.", { status: 500 });
  }
};
