export const POST = async (req, res) => {
    try {
      await connectToDB();
  
      const reqBody = await req.json();
      const { nfcUIDs, courseCode } = reqBody;
  
      const currentDate = new Date();
      const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  
      // Create an array of new Attendances based on the nfcUIDs
      const newReports = nfcUIDs.map((nfcUID) => ({
        nfcUID,
        courseCode,
        date: currentDate,
        time: currentTime,
      }));
  
      // Save all new reports asynchronously
      const savedReports = await Promise.all(newReports.map(async (report) => {
        const newReport = new Attendances(report);
        return await newReport.save();
      }));
  
      return new Response(JSON.stringify(savedReports), { status: 201 });
    } catch (error) {
      return new Response("Failed to generate attendance reports.", {
        status: 500,
      });
    }
  };
  