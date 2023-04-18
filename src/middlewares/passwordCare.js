import bcrypt from "bcrypt"

export default async function passwordCare(req, res, next){
    const { email, name, password, confirmPassword } = req.body
    if (password !== confirmPassword) return res.status(422).send({ message: "As senhas precisam ser iguais" })
    
    const newPassword = bcrypt.hashSync(password, 10)
    res.locals.body = {email, name, password: newPassword}
    next()
}