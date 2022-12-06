// Martin Aguirre
// DESAFIO: Servidor con express
import { ProductManager } from "./desafio_manejo_de_archivos.js";
import express from "express";

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 8080;
const productManager = new ProductManager();


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

app.get("/products", (req, res) =>{
    let productos = productManager.getProducts()
    console.log("productos:") 
    console.log(productos)
    res.json(productos)
})

app.get("/products/:pid", (req,res) => {
    const {pid} = req.params;
    console.log(pid)
    /*console.log(productManager.getProductById(pid))
    const product = productManager.getProductById(pid)
    res.json(product)*/
})