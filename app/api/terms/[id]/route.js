import Term from "@models/termModel";
import Audits from "@models/auditModel";
import { connectToDB } from "@utils/database";
import { getToken } from "next-auth/jwt";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  try {
    await connectToDB();

    const term = await Term.findById(params.id);
    if (!term) return new Response("term Not Found.", { status: 404 });

    const returnValue = {
      success: true,
      message: "term found.",
      data: term,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error.", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  const { term, audit } = await req.json();
  try {
    await connectToDB();
    const existingTerm = await Term.findById(params.id);

    if (!existingTerm) return new Response("Term not found", { status: 404 });

    if (!audit) return new Response("Audit required", { status: 500 });

    const oldData = {
      term: existingTerm.term,
    };

    existingTerm.term = term;

    await existingTerm.save();

    const auditData = {
      target: "Term",
      description: audit,
      oldData: oldData,
      newData: existingTerm.toObject(),
    };

    const auditRecord = new Audits(auditData);
    await auditRecord.save();

    const combinedResponse = {
      success: true,
      message: "Successfully updated the term.",
      data: {
        updatedTerm: existingTerm,
        audit: auditRecord,
      },
    };

    return new Response(JSON.stringify(combinedResponse), { status: 200 });
  } catch (error) {
    return new Response("Failed to update classlist.", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const token = await getToken({ req });
  if (!token) return new Response("heh. Nice try, guy! >:DD", { status: 500 });
  const reqBody = await req.json();
  const { audit } = reqBody;
  try {
    if (!audit) return Response("Audit cannot be empty.", { status: 500 });

    await connectToDB();

    const deletedTerm = await Term.findByIdAndRemove(params.id);

    const auditData = {
      target: "Term",
      description: audit,
      oldData: deletedTerm,
      newData: { term: "deleted term" },
    };
    const auditRecord = new Audits(auditData);
    await auditRecord.save();

    const combinedResponse = {
      success: true,
      message: "Successfully deleted the term.",
      data: {
        audit: auditRecord,
      },
    };

    return new Response(JSON.stringify(combinedResponse), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to delete the Term.",
      }),
      { status: 500 }
    );
  }
};
