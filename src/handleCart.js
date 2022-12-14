import fs from "fs"

export class CartManager {
    constructor(){
        this.cart = [];
        this.path = "./cart.json"
    }

    addCart(products){
        
        const cart = {
            id: this.#getMaxId() +1,
            products
        }
        
        this.#getCart();
        // si no hay un cart ya agregado con ese id
        if(!this.cart.includes(cart.id)){
            let products = []
            products.push(cart.products)
            let cartToPush ={
                id: cart.id,
                products
            }
            this.cart.push(cartToPush)
            const cartToWrite = JSON.stringify(this.cart)
            fs.writeFileSync(this.path, cartToWrite, "utf-8")
        }else{console.error("Ya existe un cart con ese id")}
        
    }

    getCart(){
        this.#getCart();
        console.log(this.cart);
        return(this.cart)
    }

    getCartById(id){
        this.#getCart()
        let found = false
        let cartObtained = "";
        this.cart.find((cart)=>{
            if(cart.id === id){
                found = true
                console.log(cart)
                cartObtained = cart
            }
        })
        if(!found){
            cartObtained = "Error: El producto no existe";
            console.log("Error: El producto no existe")
        }
        return (cartObtained)
    }

    updateCart(id, products){
        this.#getCart()
        this.cart.find((cart)=>{
            if(cart.id === id){
                cart.products = products
            }
        })
        const cartToWrite = JSON.stringify(this.cart)
        fs.writeFileSync(this.path, cartToWrite, "utf-8")
    }

    #getCart () {
        if(fs.existsSync("cart.json")){
            let file = fs.readFileSync("cart.json", "utf-8")
            this.cart = JSON.parse(file)
            return(this.cart)
        }else{
            fs.writeFileSync("cart.json","[]","utf-8");
            let file = fs.readFileSync("cart.json", "utf-8")
            this.cart = JSON.parse(file)
            return(this.cart)
        }
        
    }

    #getMaxId(){
        this.#getCart()
        let maxId = 0;
        this.cart.map( (cart) => {
            if(cart.id > maxId) maxId = cart.id
        })
        return maxId;
    }
}

const cartManager = new CartManager();
