import Attendances from "@models/attendanceModel";
import Classlist from "@models/classModel";
import Section from "@enums/section";
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

    const classlist = await Classlist.findById(classlistId)
      .populate({
        path: "students",
        select: "name",
      })
      .populate("sectionCode");

    if (!classlist) {
      return new Response("Classlist not found", { status: 404 });
    }

    const attendances = await Attendances.find({
      course: classlist._id,
    }).populate({
      path: "student",
      select: "name",
    });

    const map = {};
    const hoursRenderedMap = {};
    let highestHoursRendered = 0;
    let totalDays = 0;

    attendances.forEach((attendance) => {
      const date = attendance.date;
      const studentId = attendance.student._id;
      const studentName = attendance.student.name;
      const hoursRendered = parseInt(attendance.hoursRendered);
      const timeIn = attendance?.timeIn;
      const timeOut = attendance?.timeOut;

      if (!hoursRenderedMap[studentId]) {
        hoursRenderedMap[studentId] = {
          studentName,
          hoursRendered: 0,
          minimumAttendance: false,
          attendancePercentage: 0,
          daysPresent: 0,
          minimumDaysAttendance: false,
          daysAttendancePercentage: 0,
        };
      }

      if (isNaN(hoursRendered)) {
        hoursRenderedMap[studentId].hoursRendered += 0;
      } else {
        hoursRenderedMap[studentId].hoursRendered += hoursRendered;
        hoursRenderedMap[studentId].daysPresent += 1;
      }

      if (!map[date]) {
        map[date] = {
          totalHours: 0,
          aveHours: 0,
          students: [],
        };
      }

      const studentAttendanceData = {
        studentId: studentId,
        timeIn: timeIn,
        timeOut: timeOut,
        hoursRendered: hoursRendered,
      };

      map[date]["students"].push(studentAttendanceData);
      map[date]["totalHours"] += hoursRendered;
      map[date]["aveHours"] =
        map[date]["totalHours"] / map[date]["students"].length;

      if (hoursRenderedMap[studentId].hoursRendered > highestHoursRendered) {
        highestHoursRendered = hoursRenderedMap[studentId].hoursRendered;
      }
    });

    Object.values(map).forEach((day) => {
      totalDays += day.totalHours > 0 ? 1 : 0;
    });

    const attendancePercentageThreshold = 0.8;
    Object.values(hoursRenderedMap).forEach((student) => {
      const hasAllowedAttendanceRate =
        student.hoursRendered >=
        attendancePercentageThreshold * highestHoursRendered;

      const hasAllowedAttendanceDayRate =
        student.daysPresent >=
        attendancePercentageThreshold * totalDays;

      student.minimumAttendance = hasAllowedAttendanceRate;
      student.attendancePercentage = (
        (student.hoursRendered / highestHoursRendered) *
        100.0
      ).toFixed(2);

      student.minimumDaysAttendance = hasAllowedAttendanceDayRate;
      student.daysAttendancePercentage = (
        (student.daysPresent / totalDays) *
        100.0
      ).toFixed(2);
    });

    const returnValue = {
      success: true,
      message: "Attendances data retrieved successfully.",
      attendanceData: map,
      enrolledStudents: classlist.students,
      hoursRenderedDataMap: hoursRenderedMap,
      highestHoursRendered: highestHoursRendered,
      totalDays: totalDays,
      classlistInfo: {
        subjectDescription: classlist.subjectDescription,
        sectionCode: classlist.sectionCode,
      },
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${error}`, { status: 500 });
  }
};
