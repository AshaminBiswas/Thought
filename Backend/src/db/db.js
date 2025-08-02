// require("dotenv").config({ path: "./env" });
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected Successfully !! DB HOST:  ${connectionInstance.connection.host}`
    );
  } catch (error) {
    connectionInstance.on("disconnected", () => {
      console.log("MongoDB Disconnected");
    });
    console.error("MONGODB CONNECTION ERROR:", error);
    process.exit(1);
  }
};

export default connectDB;
