import { Router } from "express";
import checkType from "../middlewares/checkType.js";
import validateSchema from "../middlewares/validateSchema.js";
import { transactionSchema } from "../schemas/transactionSchema.js";
import validateUser from "../middlewares/validateUser.js";
import { getTransactions, postEntry } from "../controllers/transactionsControllers.js";
import getUser from "../middlewares/getUser.js";

const router = Router();

router.post('/nova-transacao/:tipo', validateSchema(transactionSchema), checkType, validateUser, postEntry)
router.get('/transactions', getUser, getTransactions);

export default router;