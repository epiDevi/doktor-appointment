import { UserProfil } from "../profile/userprofil.model.js";

export async function getAllDoctors(req, res) {
  try {
    const alldoctors = await UserProfil.find();
    res.json(alldoctors);
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
}
