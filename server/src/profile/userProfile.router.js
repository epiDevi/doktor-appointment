import express from "express";
import multer from "multer";

import { addprofile, getProfile } from "./userprofil.controller.js";
import { checkToken } from "../middlewares/auth.middleware.js";

export const router = new express.Router();
const upload = multer({ storage: new multer.memoryStorage() });
router.post("/addprofile", upload.single("image"), checkToken, addprofile);
router.get("/", checkToken, getProfile);
