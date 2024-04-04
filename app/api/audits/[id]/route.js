import Audits from "@models/auditModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const audit = await Audits.findById(params.id);

    if (!audit) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Audit not found",
          data: {},
        }),
        { status: 404 }
      );
    }

    const returnValue = {
      success: true,
      message: "Audit found",
      data: audit,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to get audit",
        data: {},
      }),
      { status: 500 }
    );
  }
};
