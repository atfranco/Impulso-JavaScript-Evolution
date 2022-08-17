import "reflect-metadata";
import express from "express";
import cors from "cors";

import { router } from "./routes";

import "./database";

const app = express();

// habilita o cors
app.use(cors());

// habilita express a utilizar json
app.use(express.json());

// chama router
app.use(router)

// config porta
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000 https://localhost:5000')
})
