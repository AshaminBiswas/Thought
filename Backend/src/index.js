import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on port no : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed !!!", error);
  });

/*
import express from "express"
const app  = express()
// the semicolon use for "if in previous line forget for add semicolon then some time its give some thats why we should use ; before the function"
;(async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("ERROR:", error)
      throw error
    })

    app.listen(process.env.PORT,()=>{
      console.log(`application is listening on: ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR", error)
    throw error
  }
})()

*/
