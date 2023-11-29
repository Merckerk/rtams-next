import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const reqBody = await req.json();

    const { nfcUID, courseCode } = reqBody;

    const currentDate = new Date();
    
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    const newReport = new Attendances({
      nfcUID,
      courseCode,
      date: currentDate,
      time: currentTime,
    });

    const savedReport = await newReport.save();

    return new Response(JSON.stringify(newReport), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate an attendance report.", {
      status: 500,
    });
  }
};
