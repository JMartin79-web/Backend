import { Router } from "express";
import { ProductManager } from "../handleProducts.js";

const viewsRouter = Router()
const productManager = new ProductManager();


viewsRouter.get("/", (req,res)=>{
    console.log("views router esta funcionando")
    res.render("realTimeProducts", {})
})

export default viewsRouter