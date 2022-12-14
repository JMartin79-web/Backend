import { Router } from "express";
import { CartManager } from "../handleCart";

const cartsRouter = Router();
const cartManager = new CartManager();

cartsRouter.post("/", (req,res)=>{
    let reqData = req.body
    const arrayToAdd = []
    arrayToAdd.push(reqData)
    cartManager.addCart(arrayToAdd)
})

cartsRouter.post("/:cid/product/:pid", (req,res)=>{
    const {cid, pid} = req.params
    
    let reqData = req.body
    const arrayToAdd = []
    arrayToAdd.push(reqData)
    cartManager.addCart(arrayToAdd)
})

cartsRouter.get("/:cid", (req, res)=>{
    const {cid} = req.params;
    const id = parseInt(cid)

    let cart = cartManager.getCartById(id)
    let productsCart =cart.products.toString()
    res.json(productsCart)
})


export { cartsRouter }