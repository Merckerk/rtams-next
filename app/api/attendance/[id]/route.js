import Attendances from "@models/attendanceModel";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

import Classlist from "@models/classModel";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
// GET reports
export const GET = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    const report = await Attendances.findById(params.id).populate("course");
    if (!report)
      return new Response("No attendance report found", { status: 404 });

    const returnValue = {
      success: true,
      message: "Attendance record retrieved successfully.",
      data: report,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${error}`, { status: 500 });
  }
};

// EDIT/UPDATE reports
export const PATCH = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });

  const reqBody = await req.json();
  const { timeInHours, timeInMinutes, timeOutHours, timeOutMinutes } = reqBody;

  // Parse as numbers
  const timeInHoursNum = Number(timeInHours);
  const timeInMinutesNum = Number(timeInMinutes);
  const timeOutHoursNum = timeOutHours !== null ? Number(timeOutHours) : null;
  const timeOutMinutesNum =
    timeOutMinutes !== null ? Number(timeOutMinutes) : null;

  try {
    await connectToDB();

    const errors = {};
    const requiredFields = ["timeInHours", "timeInMinutes"];

    for (const field of requiredFields) {
      if (!reqBody[field]) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
      }
    }

    if (timeOutHoursNum !== null && timeOutMinutesNum === null) {
      errors["timeOutMinutes"] =
        "Time Out Minutes is required if Time Out Hours is inputted.";
    }

    if (timeOutHoursNum === null && timeOutMinutesNum !== null) {
      errors["timeOutHours"] =
        "Time Out Hours is required if Time Out Minutes is inputted.";
    }

    // Validation for timeInHours and timeOutHours
  if (timeInHoursNum < 0 || timeInHoursNum > 23) {
    errors["timeInHours"] = "Invalid Input."
  }

  if (
    timeOutHoursNum !== null &&
    (timeOutHoursNum < 0 || timeOutHoursNum > 23)
  ) {
    errors["timeOutHours"] = "Invalid Input."
  }

  // Validation for timeInMinutes and timeOutMinutes
  if (timeInMinutesNum < 0 || timeInMinutesNum > 59) {
    errors["timeInMinutes"] = "Invalid Input."
  }

  if (
    timeOutMinutesNum !== null &&
    (timeOutMinutesNum < 0 || timeOutMinutesNum > 59)
  ) {
    errors["timeOutMinutes"] = "Invalid Input."
  }

    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid Fields",
          errors: errors,
        }),
        { status: 400 }
      );
    }

    const existingReport = await Attendances.findById(params.id);
    if (!existingReport)
      return new Response("Attendance Report not found.", { status: 404 });

    existingReport.timeIn = `${timeInHoursNum}:${timeInMinutesNum}`;
    if (timeOutHoursNum !== null && timeOutMinutesNum !== null) {
      existingReport.timeOut = `${timeOutHoursNum}:${timeOutMinutesNum}`;
    }

    if (existingReport.timeIn && existingReport.timeOut) {
      const timeInDate = new Date();
      timeInDate.setHours(timeInHoursNum);
      timeInDate.setMinutes(timeInMinutesNum);

      const timeOutDate = new Date();
      timeOutDate.setHours(timeOutHoursNum);
      timeOutDate.setMinutes(timeOutMinutesNum);

      const millisecondsDifference = timeOutDate - timeInDate;
      const minutesRendered = millisecondsDifference / (1000 * 60); // Convert milliseconds to minutes

      existingReport.hoursRendered = minutesRendered;
    }

    await existingReport.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Report updated successfully",
        data: existingReport,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response("Failed to update the report.", { status: 500 });
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
