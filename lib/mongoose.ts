import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MISSING MONGODB_URL");
  }

  if (isConnected) {
    return console.log("Mongo DB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "learn_mongodb",
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB is not connected", error);
  }
};
