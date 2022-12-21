import { Router } from "express";
import { ProductManager } from "../handleProducts.js";

const viewsRouter = Router()
const productManager = new ProductManager();


viewsRouter.get("/", (req,res)=>{
    let productos = productManager.getProducts()
    console.log("views router esta funcionando")
    let productosRender = productos;
    res.render("realTimeProducts", {productosRender})
    
})

export default viewsRouter