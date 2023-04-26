export default async function checkType(req, res, next) {
    const { tipo } = req.params;
    res.locals.body = {tipo}
    console.log(tipo)
    next()
}