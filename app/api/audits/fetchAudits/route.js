import Audits from "@models/auditModel";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();
    const audits = await Audits.find();

    const returnValue = {
      success: true,
      message: "Audit retrieval successful",
      data: audits,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    const returnValue = {
      success: false,
      message: "Audit retrieval failed",
    };
    return new Response(JSON.stringify(returnValue), { status: 500 });
  }
};
