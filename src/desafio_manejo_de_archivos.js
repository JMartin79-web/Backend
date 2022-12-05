// Martin Aguirre
// DESAFIO: Manejo de archivos

import fs from "fs"

export class ProductManager {
    constructor() {
        this.products = [];
        this.path = "./products.json";
      }

    addProduct(title, description, price, thumbnail, code, stock){
        const product ={
            id: this.#getMaxId() +1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        // validar que el objeto product tenga todos los campos llenos
        if(Object.values(product).includes(undefined)){console.log("Error: hay un campo vacio")}
        else{
            this.#getProducts()
            if(!this.products.includes(product.id)){
                this.products.push(product)
                const productsToWrite = JSON.stringify(this.products)
                fs.writeFileSync(this.path,productsToWrite,"utf-8")
            }else{console.error("Ya existe un producto con ese id")}
            
        }

    }

    getProducts(){
        this.#getProducts();
        console.log(this.products)
    }

    getProductById (id) {
        this.#getProducts()
        let found = false
        this.products.find((product)=>{
            if(product.id === id){
                found = true
                console.log(product)
                return product
            }
        })
        if(!found){console.error("Error: El producto no existe")}
    }

    updateProduct(id,title, description, price, thumbnail, code, stock){
        this.#getProducts();
        this.products.find((product) => {
            if(product.id === id){
                product.title = title;
                product.description = description;
                product.price = price;
                product.thumbnail = thumbnail;
                product.code = code;
                product.stock = stock;
            }
        })
        const productsToWrite = JSON.stringify(this.products)
        fs.writeFileSync(this.path,productsToWrite,"utf-8")
    }

    deleteProduct(ID){
        this.#getProducts();
        const find = this.products.find(product => product.id === ID)
        if(find){
            const filtered = this.products.filter(product => product.id !== ID)
            const productsToWrite = JSON.stringify(filtered)
            fs.writeFileSync(this.path,productsToWrite,"utf-8")
        }else{console.error("Error: El producto no existe")}
    }

    #getProducts () {
        if(fs.existsSync("products.json")){
            let file = fs.readFileSync("products.json", "utf-8")
            this.products = JSON.parse(file)
            return(this.products)
        }else{
            fs.writeFileSync("products.json","[]","utf-8");
            let file = fs.readFileSync("products.json", "utf-8")
            this.products = JSON.parse(file)
            
            return(this.products)
        }
        
    }

    #getMaxId(){
        this.#getProducts()
        let maxId = 0;
        this.products.map( (product) => {
            if(product.id > maxId) maxId = product.id
        })
        return maxId;
    }
}

const productManager = new ProductManager();
/*

COMANDO PARA VERIFICAR EL FUNCIONAMIENTO

console.log("getProducts")
productManager.getProducts()

console.log("getProductById")
productManager.getProductById(5)

console.log("addProducts")
productManager.addProduct("titulo1","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo2","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo3","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo4","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo5","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo6","aca va una descripcion", 100, "sin img", "este es el código", 20)

console.log("updateProduct")
productManager.updateProduct(1, "titulo modificado","aca va una descripcion", 100, "sin img", "este es el código", 20)

console.log("deleteProduct")
productManager.deleteProduct(5)

*/

productManager.addProduct("titulo1","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo2","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo3","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo4","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo5","aca va una descripcion", 100, "sin img", "este es el código", 20)
console.log("addProducts")
productManager.addProduct("titulo6","aca va una descripcion", 100, "sin img", "este es el código", 20)