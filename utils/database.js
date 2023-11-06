import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongodb is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "rtams-dev",  //TODO: change to "rtams-prod" upon deployment HAHAHAHAXD
                            //TODO: LAGAY SA ENV: MONGODB_DBNAME=rtams-dev prod naman pag sa prod
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
