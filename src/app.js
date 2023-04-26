import express from "express";
import cors from "cors";
import userRouter from "./routers/user.routes.js";
import transactionsRouter from "./routers/transaction.routes.js"


const app = express();
app.use(express.json());
app.use(cors());

const routerList = [userRouter, transactionsRouter]

app.use(routerList)

const PORT = 5000;

app.listen(PORT, () => console.log(`O server está rodando na porta ${PORT}`));