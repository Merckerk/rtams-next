import { connectToDB } from "@utils/database";
import Student from "@models/studentModel";
import Attendances from "@models/attendanceModel";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const reqBody = await req.json();
    const { nfcUIDs, courseCode, term, section } = reqBody;

    // Fetch the corresponding studentIds based on provided nfcUIDs
    const students = await Student.find({ nfcUID: { $in: nfcUIDs } });
    const studentIdMap = new Map(students.map((student) => [student.nfcUID, student._id]));

    const currentDate = new Date();
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    // Create an array of new Attendances based on the nfcUIDs
    const newReports = nfcUIDs.map((nfcUID) => ({
      student: studentIdMap.get(nfcUID),
      courseCode,
      date: currentDate,
      time: currentTime,
      term,
      section,
    }));

    // Save all new reports asynchronously
    const savedReports = await Promise.all(
      newReports.map(async (report) => {
        try {
          const newReport = new Attendances(report);
          return await newReport.save();
        } catch (error) {
          // Handle individual report save error
          console.error("Error saving report:", error);
          return { error: error.message }; // Or some default value
        }
      })
    );

    return new Response(JSON.stringify(savedReports), { status: 201 });
  } catch (error) {
    return new Response("Failed to generate attendance reports.", {
      status: 500,
    });
  }
};
