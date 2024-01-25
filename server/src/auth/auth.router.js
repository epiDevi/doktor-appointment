import express from "express";
import { check, login, register, verifyEmail } from "./auth.controller.js";
import multer from "multer";
import { checkToken } from "../middlewares/auth.middleware.js";

export const router = new express.Router();
//const upload = multer({ storage: new multer.memoryStorage() });
const upload = multer({ dest: "./images" });
router.post("/register", upload.none(), register);
router.post("/login", upload.none(), login);
router.post("/verify", upload.none(), verifyEmail);
router.get("/check", checkToken, check);
