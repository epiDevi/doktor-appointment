import { verifyToken } from "../auth/auth.service.js";

export function checkToken(req, res, next) {
  //console.log("checktocken =>", req.cookies.doctorAppointmentAuth);
  const token = req.cookies.doctorAppointmentAuth;
  if (!token || typeof token !== "string") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    req.payload = verifyToken(token);
    next();
  } catch (error) {
    console.log("invalid token", error);
    res.status(401).end();
  }
}

export function checkRole(req, res, next) {
  if (req.payload.role === "doctor") {
    next();
  } else {
    res.status(401).end;
  }
}
