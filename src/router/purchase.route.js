import {Router} from "express";
import { purchaseBook,purchaseName } from "../controller/purchase.controller.js";

const purchaseRouter = Router();

purchaseRouter.post('/purchase', purchaseBook )
purchaseRouter.get('/purchase',purchaseName)


export default purchaseRouter