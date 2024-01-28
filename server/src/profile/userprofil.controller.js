import { uploadToCloudinary } from "../service/cloudinary.service.js";
import { User } from "../user/user.model.js";
import { UserProfil } from "./userprofil.model.js";
import mongoose from "mongoose";

export async function addprofile(req, res) {
  const newProfil = new UserProfil(req.body);
  try {
    newProfil.creator = req.payload.user;
    //console.log("image=>", req.file.buffer);
    const cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    newProfil.image = cloudinaryResult.secure_url;
    newProfil.cloudinaryId = cloudinaryResult.public_id;
    //console.log("re.body from addprofile=>", req.body.workingTime);
    newProfil.workingTime = JSON.parse(req.body.workingTime);
    const result = await newProfil.save();
    res.status(201).end();
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}

export async function getProfile(req, res) {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email: email });
    //console.log("user from getprofile=>", user);
    if (user) {
      const profile = await UserProfil.findOne({
        creator: new mongoose.Types.ObjectId(user._id),
      });
      //console.log("ich bin in getProfile", profile);
      res.json(profile);
    }
  } catch (error) {
    console.log("error ", error);
    res.status(500).end();
  }
}
