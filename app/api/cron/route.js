import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";
import Session from "@models/sessionModel";
import User from "@models/userModel";
import Classlist from "@models/classModel";
import { transporter } from "@utils/nodemailer";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const maxDuration = 60;

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const sessions = await Session.find({ checked: false });

    if (sessions) {
      const flaggedEmails = [];
      const flaggedClasses = [];
      for (const session of sessions) {
        const classlist = await Classlist.findById(session.classlist)
          .populate("user")
          .populate("students");
        const attendances = await Attendances.find({
          course: classlist._id,
        }).populate({ path: "student", select: "name" });

        const hoursRenderedMap = {};
        let highestHoursRendered = 0;

        attendances.forEach((attendance) => {
          const studentId = attendance.student._id;
          const hoursRendered = parseInt(attendance.hoursRendered);

          if (!hoursRenderedMap[studentId]) {
            hoursRenderedMap[studentId] = {
              hoursRendered: 0,
            };
          }
          hoursRenderedMap[studentId].hoursRendered += isNaN(hoursRendered)
            ? 0
            : hoursRendered;

          if (
            hoursRenderedMap[studentId].hoursRendered > highestHoursRendered
          ) {
            highestHoursRendered = hoursRenderedMap[studentId].hoursRendered;
          }
        });

        const attendancePercentageThreshold = 0.8;
        let hasFailedStudent = false;
        for (const student of Object.values(hoursRenderedMap)) {
          const attendancePercentage =
            (student.hoursRendered / highestHoursRendered) * 100.0;
          if (attendancePercentage < attendancePercentageThreshold * 100) {
            hasFailedStudent = true;
            break;
          }
        }

        if (hasFailedStudent) {
          flaggedClasses.push(classlist);
          flaggedEmails.push(classlist.user.email);
        }

        // session.checked = true;
        // await session.save();
      }

      

      await transporter.sendMail({
        from: process.env.NM_EMAIL,
        to: flaggedEmails,
        subject: "Attendance Report",
        text: "Please be informed that your students are being flagged for inadequate attendances that does not satisfy our university's guidelines regarding class attendance. Please check your RTAMS profile for more information. Thank you.",
      });

      const returnValue = {
        success: true,
        message: "CRON Job completed",
        sessionsEvaluated: sessions,
        flaggedEmails: flaggedEmails,
      };

      return new Response(JSON.stringify(returnValue), { status: 200 });
    }

    return new Response("no sessions", { status: 500 });
  } catch (error) {
    return new Response(`${error}`, { status: 500 });
  }
};
