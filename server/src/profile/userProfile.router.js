import express from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import "dotenv/config";

import { addprofile, getProfile } from "./userprofil.controller.js";
import { checkToken } from "../middlewares/auth.middleware.js";
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});
export const router = new express.Router();
const upload = multer({ storage: new multer.memoryStorage() });
router.post("/addprofile", upload.single("image"), checkToken, addprofile);
router.get("/:email", checkToken, getProfile);
