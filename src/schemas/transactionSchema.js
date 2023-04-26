import joi from "joi";

export const transactionSchema = joi.object({
    description: joi.string().min(4).required(),
    price: joi.number().precision(2).positive().required(),
    type: joi.string().valid("entrada", "saida").required()
})