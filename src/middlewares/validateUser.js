import dayjs from "dayjs";
import { sessions } from "../config/collections.database.js";

export default async function validateUser(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("Unauthorized");
    const token = authorization.replace("Bearer ", "");
    try {
        const session = await sessions.findOne({ token })
        if (!session) { return res.status(422).send('Necessário autenticação') }
        res.locals.body = { ...req.body, userId: session.userId, date: Date.now() }
        console.log(res.locals.body.date)
    }
    catch (err) {
        console.error(err)
        res.status(422).send("validate")
    }
    next()
}