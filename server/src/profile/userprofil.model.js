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
  // workingtime: {
  //   start: Date,
  //   end: Date,
  // },
  // visitingtime: [],
});

export const UserProfil = mongoose.model("userprofile", userprofilSchema);
