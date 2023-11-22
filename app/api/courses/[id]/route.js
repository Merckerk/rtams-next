import Course from "@models/courseModel";
import { connectToDB } from "@utils/database";

// GET course
export const GET = async (req, { params }) => { //TODO: TITE LIPAT SA OTHER ROUTE
  //TODO: TITE PALITAN NG FIND BY ID
  try {
    await connectToDB();

    // Find the course according to professor/userId and indicate who the professor is
    const course = await Course.find({ professor: params.id }).populate(
      "professor"
    );

    if (!course) return new Response("Course not found.", { status: 404 });

    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch courses.", { status: 500 });
  }
};

// EDIT/UPDATE course
export const PATCH = async (req, { params }) => {
  const { userId, course, students, days } = await req.json();
  try {
    // connect to mongoDB
    await connectToDB();

    // pass variables above, then save in the database
    const existingCourse = await Course.findById(params.id);

    if (!existingCourse)
      return new Response("Course not found.", { status: 404 });

    existingCourse.userId = userId; //TODO: TITE
    existingCourse.course = course;
    existingCourse.students = students;
    existingCourse.days = days;

    await existingCourse.save();

    return new Response(JSON.stringify(existingCourse), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the course.", { status: 500 });
  }
};

// DELETE course
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Course.findByIdAndRemove(params.id);

    return new Response("Course deleted successfully.", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete course.", { status: 500 });
  }
};
