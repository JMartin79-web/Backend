import { Router } from "express";
import { ProductManager } from "../handleProducts.js";

const productsRouter = Router()
const productManager = new ProductManager();

productsRouter.get("/", (req,res)=>{
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

productsRouter.get("/:pid", (req,res) => {
    const {pid} = req.params;
    const id = parseInt(pid)
    const product = productManager.getProductById(id)
    res.json(product)
})

productsRouter.post("/", (req,res)=>{
    let reqData = req.body
    console.log(reqData)
    
    productManager.addProduct(
        reqData.title,
        reqData.description,
        reqData.code,
        reqData.price,
        reqData.status,
        reqData.stock,
        reqData.category,
        reqData.thumbnail
    )
    res.status(201).json("Producto agregado")
})

productsRouter.put("/:pid", (req,res)=>{
    const {pid} = req.params;
    const id = parseInt(pid)
    
    let reqData = req.body
    productManager.updateProduct(
        id,
        reqData.title,
        reqData.description,
        reqData.code,
        reqData.price,
        reqData.status,
        reqData.stock,
        reqData.category,
        reqData.thumbnail
    )
    res.status(201).json("Producto actualizado")
})

productsRouter.delete("/:pid", (req,res) => {
    const {pid} = req.params;
    const id = parseInt(pid)
    productManager.deleteProduct(id)
    res.json("Producto eliminado")
})


export { productsRouter}