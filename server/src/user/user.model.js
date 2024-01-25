import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  sixDigitCode: String,
  eamilVeryfied: Boolean,
});

export const User = mongoose.model("user", userSchema);
