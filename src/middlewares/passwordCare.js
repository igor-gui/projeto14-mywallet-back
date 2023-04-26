import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid"

export default async function passwordCare(req, res, next) {
    const { email, name, password } = req.body;
    const { routeName, user } = res.locals;

    if (routeName === '/cadastro') {
        const newPassword = bcrypt.hashSync(password, 10)
        res.locals.body = { email, name, password: newPassword }
    }
    if (routeName === '/login') {
        const token = uuidv4();
        console.log(routeName)
        const rightPassword = bcrypt.compareSync(password, user.password);
        if (!rightPassword) return res.status(401).send();
        res.locals.session = { token, userId: user._id }
    }
    next()
}