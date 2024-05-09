import { connectToDB } from "@utils/database";
import Attendances from "@models/attendanceModel";
import Session from "@models/sessionModel";
import User from "@models/userModel";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const sessions = await Session.find({ checked: false }).populate("faculty");
    const usersEmail =
      sessions.length > 0
        ? sessions.map((session) => session?.faculty?.email)
        : null;
    const filteredUsersEmail = [...new Set(usersEmail)];
    console.log(filteredUsersEmail);

    return new Response(JSON.stringify(filteredUsersEmail), { status: 500 });
  } catch (error) {
    console.log("eguls", error);
  }
};
