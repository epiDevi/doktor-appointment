import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router as authRouter } from "./src/auth/auth.router.js";
import { router as profileRouter } from "./src/profile/userProfile.router.js";
import { router as userRouter } from "./src/user/user.router.js";
try {
  await mongoose.connect(process.env.MONGODB);
  console.log("connecting to Mongodb");
} catch (error) {
  console.log("Error to Connecting Mongodb", error);
}

const app = express();
console.log("testtttt");
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => console.log("server leuft"));
