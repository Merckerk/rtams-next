import Term from "@models/termModel";
import { connectToDB } from "@utils/database";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (req, { params }) => {
    try {
      await connectToDB();
  
      const term = await Term.findById(params.id);
      if (!term)
        return new Response("term Not Found.", { status: 404 });
  
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
    const {term} = await req.json();
    try {
        await connectToDB();
        const existingTerm = await Term.findById(params.id);

        
    } catch (error) {
        
    }
  }