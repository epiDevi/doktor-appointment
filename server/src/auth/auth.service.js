import jwt from "jsonwebtoken";
import { createHmac, randomBytes } from "node:crypto";

export function createSalt() {
  return randomBytes(12).toString("hex");
}

export function createHash(pass, salt) {
  const hmac = createHmac("sha256", salt);
  hmac.update(pass);
  return hmac.digest("hex");
}

export function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10min" });
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
export function generateRandomSixDigitCode() {
  return Math.random().toString().slice(2, 8);
}
