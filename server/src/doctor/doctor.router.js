import express from "express";
import multer from "multer";
import { checkToken } from "../middlewares/auth.middleware.js";
import { getAllDoctors } from "./doctor.controller.js";

export const router = new express.Router();
//const upload = multer({ storage: new multer.memoryStorage() });
router.get("/", getAllDoctors);
