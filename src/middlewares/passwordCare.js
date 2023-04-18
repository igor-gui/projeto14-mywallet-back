import bcrypt from "bcrypt"

export default async function passwordCare(req, res, next){
    const { email, name, password } = req.body
    
    const newPassword = bcrypt.hashSync(password, 10)
    res.locals.body = {email, name, password: newPassword}
    next()
}