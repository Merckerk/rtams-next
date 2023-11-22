import Course from "@models/courseModel";
import { connectToDB } from "@utils/database";

// GET course
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    //Find the course according to params.id sent by client
    const course = await Course.findById(params.id);
    if (!course) return new Response("Course Not Found.", { status: 404 });

    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error.", { status: 500 });
  }
};

// EDIT/UPDATE course
export const PATCH = async (req, { params }) => {
  const { courseName, courseCode, professor, students, days, term } =
    await req.json();
  try {
    // connect to mongoDB
    await connectToDB();

    // pass variables above, then save in the database
    const existingCourse = await Course.findById(params.id);

    if (!existingCourse)
      return new Response("Course not found.", { status: 404 });

    existingCourse.courseName = courseName;
    existingCourse.courseCode = courseCode;
    existingCourse.professor = professor;
    existingCourse.students = students;
    existingCourse.days = days;
    existingCourse.term = term;

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
