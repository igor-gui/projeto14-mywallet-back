import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routers/user.routes.js";
dotenv.config()


const app = express();
app.use(express.json());
app.use(cors());

const routerList = [userRouter]

app.use(routerList)

const PORT = 5000;

app.listen(PORT, () => console.log(`O server está rodando na porta ${PORT}`));