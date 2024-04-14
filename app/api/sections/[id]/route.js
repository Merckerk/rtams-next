import Section from "@models/sectionModel";
import Audits from "@models/auditModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const section = await Section.findById(params.id);
    if (!section) return new Response("section Not Found.", { status: 404 });

    const returnValue = {
      success: true,
      message: "section found.",
      data: section,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error.", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { section, audit } = await req.json();
  try {
    await connectToDB();
    const existingSection = await Section.findById(params.id);

    if (!existingSection) return new Response("Section not found", { status: 404 });

    if (!audit) return new Response("Audit required", { status: 500 });

    const oldData = {
      section: existingSection.section,
    };

    existingSection.section = section;

    await existingSection.save();

    const auditData = {
      target: "Section",
      description: audit,
      oldData: oldData,
      newData: existingSection.toObject(),
    };

    const auditRecord = new Audits(auditData);
    await auditRecord.save();

    const combinedResponse = {
      success: true,
      message: "Successfully updated the section.",
      data: {
        updatedSection: existingSection,
        audit: auditRecord,
      },
    };

    return new Response(JSON.stringify(combinedResponse), { status: 200 });
  } catch (error) {
    return new Response("Failed to update section.", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const reqBody = await req.json();
  const { audit } = reqBody;
  try {
    if (!audit) return Response("Audit cannot be empty.", { status: 500 });

    await connectToDB();

    const deletedSection = await Section.findByIdAndRemove(params.id);

    const auditData = {
      target: "Section",
      description: audit,
      oldData: deletedSection,
      newData: { section: "deleted section" },
    };
    const auditRecord = new Audits(auditData);
    await auditRecord.save();

    const combinedResponse = {
      success: true,
      message: "Successfully deleted the section.",
      data: {
        audit: auditRecord,
      },
    };

    return new Response(JSON.stringify(combinedResponse), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to delete the Section.",
      }),
      { status: 500 }
    );
  }
};
