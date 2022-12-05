// Martin Aguirre
// DESAFIO: Servidor con express
import { ProductManager } from "./desafio_manejo_de_archivos";
import express from "express";

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 8080;


