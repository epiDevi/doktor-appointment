import { sendEmail } from "../email/email.service.js";
import { User } from "../user/user.model.js";
import {
  createHash,
  createSalt,
  createToken,
  generateRandomSixDigitCode,
} from "./auth.service.js";

export async function register(req, res) {
  console.log("Ich bin in Register");
  const newuser = req.body;
  const sixDigitCode = generateRandomSixDigitCode();
  const emailSend = await sendEmail({
    to: newuser.email,
    subject: "Please verify your E-Mail",
    text: `Hello,\nPlease use this six digit verification code: ${sixDigitCode} to verify your email.\nYours,\nDoctor Appointment`,
  });
  if (!emailSend) throw new Error("Could not send email, register failed");

  console.log("new user=>", newuser);
  const existigUser = await User.findOne({ email: newuser.email });
  if (existigUser) {
    return res.status(401).end();
  }
  newuser.salt = createSalt();
  newuser.password = createHash(newuser.password, newuser.salt);
  newuser.sixDigitCode = sixDigitCode;
  newuser.eamilVeryfied = true;
  await User.create(newuser);
  res.status(201).end();
}

export async function verifyEmail(req, res) {
  console.log("in verify******");
  const email = req.body.email;
  const sixDigitCode = req.body.sixDigitCode;
  const user = await User.findOne({ email });
  if (!user)
    res.sattus(404).send({ success: false, error: "Invalid verification" });
  const validSixDigitCode = sixDigitCode === user.sixDigitCode;
  if (!validSixDigitCode)
    res.sattus(404).send({ success: false, error: "Invalid verification" });
  user.eamilVeryfied = true;
  res.status(200).send({ success: true });
}

export async function login(req, res) {
  const user = await User.findOne({ email: req.body.email });
  console.log("Ich bin in login", req.body.email, req.body.password);
  if (!user) {
    return res.status(402).end();
  }
  if (user.password !== createHash(req.body.password, user.salt)) {
    return res.status(403).end();
  }
  if (!user.eamilVeryfied) {
    return res.status(403).end();
  }
  const token = createToken({ user: user._id, role: user.role });
  res
    .cookie("doctorAppointmentAuth", token, {
      httpOnly: true,
      secure: true,
      path: "/",
    })
    .json({ email: user.email, role: user.role });
}
export function check(req, res) {
  res.json({ user: req.payload.user, role: req.payload.role });
}
