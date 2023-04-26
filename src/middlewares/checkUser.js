import { users } from "../config/collections.database.js";

export default async function checkUser(req, res, next) {
    const { email } = req.body;
    const { routeName } = res.locals;
    try {
        const userExists = await users.findOne({ email });
        if (userExists && routeName === '/cadastro') {
            return res.status(409).send("Usuário já cadastrado")
        }
        if(!userExists && routeName === '/login') return res.status(404).send()
        res.locals.user = userExists;
    } catch (err) {
        console.error(err)
        return res.status(422).send("checkUser")
    }
    next()
}