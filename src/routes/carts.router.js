import { Router } from "express";
import { CartManager } from "../handleCart.js";

const cartsRouter = Router();
const cartManager = new CartManager();

cartsRouter.post("/", (req,res)=>{
    let reqData = req.body
    cartManager.addCart(reqData)
    res.status(201).json("Cart agregado")
})

cartsRouter.post("/:cid/product/:pid", (req,res)=>{
    const {cid, pid} = req.params
    let cartId = parseInt(cid)
    let productId = parseInt(pid)

    let productToAdd = {
        id: productId,
        quantity: 1
    }
    
    let found = false
    let cartProducts = cartManager.getCartById(cartId).products
    console.log("cartProducts")
    console.log(cartProducts)
    
    cartProducts.forEach( (obj) =>{
        console.log(obj)
        if(obj.id === productId){
            obj.quantity += 1
            found = true
            console.log("encontrado")
            console.log(obj)
        }
    })
    if(!found){cartProducts.push(productToAdd)}
    
    cartManager.updateCart(cartId, cartProducts)
    res.send(cartProducts)
})

cartsRouter.get("/:cid", (req, res)=>{
    const {cid} = req.params;
    const id = parseInt(cid)

    let cart = cartManager.getCartById(id)
    let productsCart = (cart.products)
    let products = []
    productsCart.forEach(obj => {
        products.push(Object.values(obj))
    });
    res.send(products)
})


export { cartsRouter }