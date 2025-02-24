import { Router } from "express";
import bookRouter from "./books.route.js";
import purchaseRouter from "./purchase.route.js";
import userRouter from "./user.route.js";

const serverRouter = Router()

serverRouter.use('/api',[bookRouter,purchaseRouter,userRouter])



export default serverRouter