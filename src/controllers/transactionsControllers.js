import { transactions } from "../config/collections.database.js"

export async function postEntry(req, res) {
    const { body } = res.locals
    try {
        await transactions.insertOne(body)
        const userTransactions = await transactions.find({ userId: body.userId }).toArray()
        return res.status(201).send(userTransactions)
    } catch (err) {
        console.error(err)
        return res.status(422).send("postEntry")
    }
}

export async function getTransactions(req, res) {
    const { user } = res.locals;
    try {
        const userTransactions = await transactions.find({ userId: user }).toArray();
        return res.status(201).send(userTransactions);
    } catch (err) {
        console.error(err)
        return res.status(422).send('getTransactions')
    }
}