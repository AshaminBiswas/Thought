import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

//use  cross origin resource sharing middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// use express.json() middleware for accept json data and set limit
app.use(express.json({ limit: "16kb" }));

//use express.urlencoded  middleware for accept data through url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

//for access cookie and update cookie from server to user browser.
app.use(cookieParser());

export { app };
