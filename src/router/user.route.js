import { Router } from "express";
import { getUserProfile, loginController, signupController } from "../controller/user.controller.js";
import { checkAuthToken } from "../middleware/auth.middleware.js";

const userRouter = Router()

userRouter.post('/auth/signup',signupController)
userRouter.post('/auth/login',loginController)
userRouter.get('/auth/user/profile',checkAuthToken,getUserProfile)

export default userRouter