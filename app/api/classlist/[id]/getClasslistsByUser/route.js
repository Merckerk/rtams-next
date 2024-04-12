import Classlist from "@models/classModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const classlist = await Classlist.find({ user: params.id });
    if (!classlist)
      return new Response("Classlist Not Found.", { status: 404 });

    const returnValue = {
      success: true,
      message: "Classlist found.",
      data: classlist,
    };

    return new Response(JSON.stringify(returnValue), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error.", { status: 500 });
  }
};
