import express from "express";
import { checkToken, checkRole } from "../middlewares/auth.middleware.js";
import { getActueleUser, getUser } from "./user.controller.js";

export const router = new express.Router();

router.get("/", checkToken, checkRole, getUser);
router.get("/actuel", checkToken, getActueleUser);
