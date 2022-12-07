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
    let limit = req.query.limit;
    
    let productos = productManager.getProducts()
    if(limit){
        let until = parseInt(limit)
        const productosLimit = productos.slice(0, until)
        res.json(productosLimit)
    }else{
        res.json(productos)
    }
})

app.get("/products/:pid", (req,res) => {
    const {pid} = req.params;
    const id = parseInt(pid)
    const product = productManager.getProductById(id)
    res.json(product)
})

