import jwt from "jsonwebtoken";

export const extractDataFromToken = (request) => {
  try {
    //Grabs the token of the user from the browser cookies and stores it in a variable
    const token = request.cookies.get("token")?.value || "";

    //Verifies that the token came from the secret used in the .env
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);

    //Return the id of the decoded token
    return decodedToken.id;
  } catch (error) {
    throw new Error(error);
  }
};
