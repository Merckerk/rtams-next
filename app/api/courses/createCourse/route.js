import { connectToDB } from "@utils/database";
import Course from "@models/courseModel";
export const POST = async (req) => {
  const { userId, course, students, days } = await req.json(); //TODO: TITE
  try {
    // connect to mongoDB
    await connectToDB();

    //TODO: VALIDATE REQUIRED
    // pass variables above, then save in the db
    const newCourse = new Course({ professor: userId, course, students, days });  //TODO: TITE
    
    await newCourse.save(); //TODO: TITE

    // return response
    return new Response(JSON.stringify(newCourse), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Course.", { status: 500 });
  }
};
