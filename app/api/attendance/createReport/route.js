import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";
import Student from "@models/studentModel";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const reqBody = await req.json();

    const { nfcUID, courseCode, section, term  } = reqBody;

    const student = await Student.findOne({ nfcUID });
    if (!student) {
      return new Response("Student not found for the given NFC UID.", { status: 404 });
    }

    const currentDate = new Date();
    
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    const newReport = new Attendances({
      student: student._id,
      courseCode,
      date: currentDate,
      time: currentTime,
      term,
      section
    });

    const savedReport = await newReport.save();

    return new Response(JSON.stringify(savedReport), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate an attendance report.", {
      status: 500,
    });
  }
};
