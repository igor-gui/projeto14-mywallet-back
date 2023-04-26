import { sessions, users } from "../config/collections.database.js";

export default async function getUser(req, res, next) {

    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("UNAUTHORIZED");
    const token = authorization.replace("Bearer ", "");

    try {

        const session = await sessions.findOne({ token });
        if(!session) return res.status(401).send("Necessário autencticação")
        res.locals.user = session.userId;

    } catch (err) {

        console.error(err);
        return res.status(422).send("getUser");
    }
    next()
}