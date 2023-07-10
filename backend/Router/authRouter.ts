import { Router } from "express";
import { registerUser,userLogin, userLogout } from "../controllers/userController";
import { auth } from "../middleware/authMiddleware";

export const authRouter = Router();
authRouter.post("/signup",registerUser);
authRouter.post("/login",userLogin);
authRouter.delete("/logout",auth, userLogout);
