import mongoose from "mongoose";
const userprofilSchema = new mongoose.Schema({
  creator: mongoose.ObjectId,
  firstname: {
    type: String,
    requird: true,
  },
  lastname: {
    type: String,
    requird: true,
  },
  specialty: {
    type: String,
    requird: true,
  },
  about: {
    type: String,
    requird: true,
  },
  image: {
    type: String,
    requird: true,
  },
  cloudinaryId: { type: String },
  experience: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  workingTime: [{ day: String, start: String, end: String }],
});

export const UserProfil = mongoose.model("userprofile", userprofilSchema);
