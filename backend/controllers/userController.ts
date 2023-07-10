import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import userModel, { userValidation } from "../models/userModel";
import { compare, hash } from "bcryptjs";
import KeyValueModel from "../models/KVModel";
import { User } from "../src/type";

export async function registerUser(req: Request, res: Response) {
  let { email, password, name, number } = req.body as User;

  try {
    const validate = userValidation({ name, email, password, number });
    if (validate.error)
      return res.status(400).json({ message: validate.error.message });

    if (await userModel.exists({ number: number })) {
      return res.status(400).json({ error: "number already exist" });
    }
    let hashPassword = await hash(password, Number(process.env.HASH_ROUND));
    let user = new userModel({ name, email, password: hashPassword,number });
    await user.validate();
    await user.save();
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function userLogin(req: Request, res: Response) {
  let { number, password } = req.body;

  try {
    let user = await userModel.findOne({ number: number });
    if (!user)
      return res.status(404).json({ error: "invalid number or password" });

    let isValid = await compare(password, user.password);
    if (!isValid)
      return res.status(404).json({ error: "invalid number or password" });
    const key = Date.now().toString() + user._id.toString();
    await KeyValueModel.create({ key: key, value: true });
    let token = sign(
      { user_id: user.id, name: user.name, key: key },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie("jwtToken", token, {
      sameSite: "none",
      secure: true,
      maxAge: 60 * 60 * 1000,
    });
    res.json({ name: user.name, number  });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
}
export async function userLogout(req: Request, res: Response) {
  try {
    const { key } = req.body;
    await KeyValueModel.deleteOne({ key: key });
    res.clearCookie("jwtToken").json({ message: "user logout successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
