import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/userSchema.js";
import {signUp, logIn} from "../controllers/userControllers.js";
import checkUser from "../middlewares/checkUser.js";
import passwordCare from "../middlewares/passwordCare.js";
import { sessionSchema } from "../schemas/sessionSchema.js";

const router = Router()

const signUpString = '/cadastro';
const signInString = '/login';

router.post(signUpString, validateSchema(userSchema, signUpString), checkUser, passwordCare, signUp);
router.post(signInString, validateSchema(sessionSchema, signInString), checkUser, passwordCare, logIn)

export default router