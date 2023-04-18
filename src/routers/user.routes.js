import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/userSchema.js";
import signUp from "../controllers/userControllers.js";
import checkUser from "../middlewares/checkUser.js";
import passwordCare from "../middlewares/passwordCare.js";

const router = Router()

router.post('/cadastro', validateSchema(userSchema), checkUser, passwordCare, signUp)

export default router