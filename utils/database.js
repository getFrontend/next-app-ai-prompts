import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongo DB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
    });

    isConnected = true;
    console.log("✔ MongoDB successfully conected");
  } catch (error) {
    console.log(error);
  }
}