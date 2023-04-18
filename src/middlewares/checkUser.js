import { users } from "../config/collections.database.js";

export default async function checkUser(req, res, next) {
    const { email } = req.body;
    try {
        const userExists = await users.findOne({email});
        if(userExists){
            return res.status(409).send("Usuário já cadastrado")
        }
        next()
    } catch (err) {
        console.error(err)
        return res.status(422).send("checkUser")
    }
}