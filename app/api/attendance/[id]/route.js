import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";

// GET reports
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const report = await Attendances.findById(params.id);
    if (!report)
      return new Response("No attendance report found", { status: 404 });
  } catch (error) {}
};

// EDIT/UPDATE reports
export const PATCH = async (req, { params }) => {
  const { studentNumber, name, section, nfcUID, dateTime, courseCode, term } =
    await req.json();
  try {
    await connectToDB();

    const existingReport = await Attendances.findById(params.id);

    if (!existingReport)
      return new Response("Attendance Report not found.", { status: 404 });

    existingReport.studentNumber = studentNumber;
    existingReport.name = name;
    existingReport.section = section;
    existingReport.nfcUID = nfcUID;
    existingReport.dateTime = dateTime;
    existingReport.courseCode = courseCode;
    existingReport.term = term;

    await existingReport.save();

    return new Response(JSON.stringify(existingReport), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the report.");
  }
};

// DELETE reports
export const DELETE = async (req, { params }) => {
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
