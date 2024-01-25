import { UserProfil } from "./userprofil.model.js";

export async function addprofile(req, res) {
  const newProfil = req.body;
  newProfil.creator = req.payload.user;
  newProfil.image = req.file.path;
  await UserProfil.create(newProfil);
}

export async function getProfile(req, res) {
  console.log("ich bin in getProfile");
  try {
    const profile = await UserProfil.find();
    res.json(profile);
  } catch (error) {
    console.log("error ", error);
    res.status(500).end();
  }
}
