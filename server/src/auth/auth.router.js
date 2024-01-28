import express from "express";
import {
  check,
  login,
  logout,
  register,
  verifyEmail,
} from "./auth.controller.js";
import multer from "multer";
import { checkToken } from "../middlewares/auth.middleware.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export const router = new express.Router();
const upload = multer({ storage: new multer.memoryStorage() });
router.post("/register", upload.none(), register);
router.post("/login", upload.none(), login);
router.post("/verify", upload.none(), verifyEmail);
router.get("/check", checkToken, check);
router.get("/logout", logout);
