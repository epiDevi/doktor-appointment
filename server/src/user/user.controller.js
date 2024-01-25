import { User } from "./user.model.js";

export async function getUser(req, res) {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}

export async function getActueleUser(req, res) {
  try {
    const user = await User.findById(req.payload.user);
    res.json({ email: user.email, role: user.role });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}
