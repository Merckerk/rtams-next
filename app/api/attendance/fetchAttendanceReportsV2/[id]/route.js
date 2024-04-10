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

    console.log("good here1");

    const classlist = await Classlist.findById(classlistId).populate({
      path: "students",
      select: "name"
    });

    console.log("good here2");
    if (!classlist) {
      return new Response("Classlist not found", { status: 404 });
    }

    const attendances = await Attendances.find({
      course: classlist._id,
    }).populate({
      path: "student",
      select: "name",
    });

    console.log("good here3");

    const map = {};

    attendances.forEach((attendance) => {
      const date = attendance.date;

      if (!map[date]) {
        map[date] = [];
      }

      map[date].push(attendance.student.name); 
    });

    console.log("good here4");

    const returnValue = {
      success: true,
      message: "Attendances data retrieved successfully.",
      data: map,
    };

    console.log("good here5");

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    // Include the actual error message in the response
    return new Response(`Internal Server Error: ${error}`, { status: 500 });
  }
};
