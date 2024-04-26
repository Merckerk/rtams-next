import Attendances from "@models/attendanceModel";
import Classlist from "@models/classModel";
import Student from "@models/studentModel";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();
    const classlistId = params.id;

    if (!classlistId) {
      return new Response("ClasslistId not supplied", { status: 404 });
    }

    const classlist = await Classlist.findById(classlistId).populate({
      path: "students",
      select: "name",
    });

    console.log("classlist students:", classlist);

    if (!classlist) {
      return new Response("Classlist not found", { status: 404 });
    }

    const attendances = await Attendances.find({
      course: classlist._id,
    }).populate({
      path: "student",
      select: "name",
    });

    console.log("attendances: ", attendances);

    const map = {};
    const hoursRenderedMap = {};
    let highestHoursRendered = 0;

    attendances.forEach((attendance) => {
      const date = attendance.date;
      const studentId = attendance.student._id;
      const studentName = attendance.student.name;
      const hoursRendered = parseInt(attendance.hoursRendered);

      if (!hoursRenderedMap[studentId]) {
        hoursRenderedMap[studentId] = {
          studentName,
          hoursRendered: 0,
          minimumAttendance: false,
          attendancePercentage: 0,
        };
      }
      hoursRenderedMap[studentId].hoursRendered += isNaN(hoursRendered)
        ? 0
        : hoursRendered;

      if (!map[date]) {
        map[date] = [];
      }

      map[date].push(studentName);

      if (hoursRenderedMap[studentId].hoursRendered > highestHoursRendered) {
        highestHoursRendered = hoursRenderedMap[studentId].hoursRendered;
      }
    });

    const attendancePercentageThreshold = 0.8;
    Object.values(hoursRenderedMap).forEach((student) => {
      const hasAllowedAttendanceRate =
        student.hoursRendered >=
        attendancePercentageThreshold * highestHoursRendered;

      student.minimumAttendance = hasAllowedAttendanceRate;
      student.attendancePercentage = ((student.hoursRendered / highestHoursRendered) * 100.0).toFixed(2);
    });

    console.log("hours rendered map", hoursRenderedMap);
    console.log("highest hours rendered", highestHoursRendered);

    const returnValue = {
      success: true,
      message: "Attendances data retrieved successfully.",
      attendanceData: map,
      enrolledStudents: classlist.students,
      hoursRenderedDataMap: hoursRenderedMap,
      highestHoursRendered: highestHoursRendered,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${error}`, { status: 500 });
  }
};
