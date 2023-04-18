import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use()

const PORT = 5000;

app.listen(PORT, () => console.log(`O server está rodando na porta ${PORT}`));