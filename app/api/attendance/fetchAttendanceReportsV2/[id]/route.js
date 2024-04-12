import Attendances from "@models/attendanceModel";
import Classlist from "@models/classModel";
import Student from "@models/studentModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
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

    // let students = [];

    // classlist.students.forEach((student) => {
    //   const studentName = student.name;
    //   students.push(studentName);
    // });

    const attendances = await Attendances.find({
      course: classlist._id,
    }).populate({
      path: "student",
      select: "name",
    });

    console.log("attendances: ", attendances);
    //for the hoursRenderedMap, it should be a key-value pairs of students and their total hours rendered.

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

    console.log("hours rendered map", hoursRenderedMap);
    console.log("highest hours rendered", highestHoursRendered);

    const returnValue = {
      success: true,
      message: "Attendances data retrieved successfully.",
      attendanceData: map,
      enrolledStudents: classlist.students,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    return new Response(`Internal Server Error: ${error}`, { status: 500 });
  }
};
