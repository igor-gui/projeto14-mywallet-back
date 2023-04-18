import { users } from "../config/collections.database.js"

export default async function signUp(req, res) {
    const { body } = res.locals
    try {
        await users.insertOne(body)
        return res.status(201).send("Usuário Cadastrado com Sucesso!")
    } catch (err) {
        console.error(err)
        return res.status(422).send("signUp")
    }
}