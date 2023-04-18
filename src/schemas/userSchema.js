import joi from "joi"
const minPass = 3;

export const userSchema = joi.object({
    name: joi.string().min(3).required(),
    password: joi.string().min(minPass).required(),
    confirmPassword: joi.string().min(minPass).required(),
    email: joi.string().email().min(minPass)
})