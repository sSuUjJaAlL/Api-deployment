import { Router } from "express";
import bookRouter from "./books.route.js";
import purchaseRouter from "./purchase.route.js";

const serverRouter = Router()

serverRouter.use('/api',[bookRouter,purchaseRouter])



export default serverRouter