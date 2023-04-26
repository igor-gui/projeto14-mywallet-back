import { sessions, users } from "../config/collections.database.js"

export async function signUp(req, res) {
    const { body } = res.locals
    try {
        await users.insertOne(body)
        return res.status(201).send({message: "Usuário Cadastrado com Sucesso!"})
    } catch (err) {
        console.error(err)
        return res.status(422).send("signUp")
    }
}

export async function logIn(req, res) {
    const { session } = res.locals;
    console.log(session)
    try {
        await sessions.insertOne(session)
        return res.status(200).send(session.token)
    } catch (err) {
        console.error(err)
        return res.status(422).send("log_in")
    }
}