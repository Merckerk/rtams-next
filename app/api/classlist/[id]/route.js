import Audits from "@models/auditModel";
import Classlist from "@models/classModel";
import { connectToDB } from "@utils/database";
import bcryptjs from "bcryptjs";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

// GET classlist
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const classlist = await Classlist.findById(params.id);
    if (!classlist)
      return new Response("Classlist Not Found.", { status: 404 });

    const returnValue = {
      message: "Classlist found.",
      data: classlist,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error.", { status: 500 });
  }
};

// EDIT/UPDATE classlist
export const PATCH = async (req, { params }) => {
  const {
    user,
    sectionCode,
    subjectCode,
    subjectDescription,
    term,
    schedule,
    students,
    audit,
  } = await req.json();
  try {
    await connectToDB();
    const existingClasslist = await Classlist.findById(params.id);

    if (!existingClasslist)
      return new Response("Classlist not found", { status: 404 });

    const oldData = {
      user: existingClasslist.user,
      sectionCode: existingClasslist.sectionCode,
      subjectCode: existingClasslist.subjectCode,
      subjectDescription: existingClasslist.subjectDescription,
      term: existingClasslist.term,
      schedule: existingClasslist.schedule,
      students: existingClasslist.students,
    };

    existingClasslist.user = user;
    existingClasslist.sectionCode = sectionCode;
    existingClasslist.subjectCode = subjectCode;
    existingClasslist.subjectDescription = subjectDescription;
    existingClasslist.term = term;
    existingClasslist.schedule = schedule;
    existingClasslist.students = students;

    await existingClasslist.save();

    const auditData = {
      target: "Classlist",
      description: audit,
      oldData: oldData,
      newData: existingClasslist.toObject(),
    };
    const auditRecord = new Audits(auditData);
    await auditRecord.save();

    const combinedResponse = {
      success: true,
      message: "Successfully updated the class list.",
      data: {
        updatedClassList: existingClasslist,
        audit: auditRecord,
      },
    };

    return new Response(JSON.stringify(combinedResponse), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update classlist.", { status: 500 });
  }
};

// DELETE classlist
export const DELETE = async (req, { params }) => {
  const reqBody = await req.json();
  const { audit } = reqBody;
  try {
    if (!audit) return Response("Audit cannot be empty.", { status: 500 });

    await connectToDB();

    const deletedClasslist = await Classlist.findByIdAndRemove(params.id);

    const auditData = {
      target: "Classlist",
      description: audit,
      oldData: deletedClasslist,
      newData: { classlist: "deleted classlist" },
    };
    const auditRecord = new Audits(auditData);
    await auditRecord.save();

    console.log("good here1");

    const combinedResponse = {
      success: true,
      message: "Successfully updated the class list.",
      data: {
        audit: auditRecord,
      },
    };

    console.log("good here");
    return new Response(JSON.stringify(combinedResponse), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to delete the Classlist.",
      }),
      { status: 500 }
    );
  }
};
