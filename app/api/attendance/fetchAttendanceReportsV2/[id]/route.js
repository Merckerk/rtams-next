import Attendances from "@models/attendanceModel";
import Classlist from "@models/classModel";
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

    const classlist = await Classlist.findById(classlistId).populate(
      "students"
    );

    if (!classlist) {
      return new Response("Classlist not found", { status: 404 });
    }

    const attendances = await Attendances.find({
      course: classlist._id,
    }).populate("student");

    const map = {};

    attendances.forEach((attendance) => {
      const date = attendance.date;

      if (!map[date]) {
        map[date] = [];
      }

      map[date].push(attendance.student.studentName);
    });

    const returnValue = {
      success: true,
      message: "Attendances data retrieved successfully.",
      data: map,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error.", { status: 500 });
  }
};
