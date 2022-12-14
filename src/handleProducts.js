import fs from "fs"

export class ProductManager {
    constructor() {
        this.products = [];
        this.path = "./products.json";
      }

    addProduct(title, description, code, price, status, stock, category, thumbnail){
        const product ={
            id: this.#getMaxId() +1,
            title,
            description,
            code,
            price,
            status: true,
            stock,
            category,
            thumbnail: [],
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
        console.log(this.products);
        return(this.products)
    }

    getProductById (id) {
        this.#getProducts()
        let found = false
        let productObtained = "";
        this.products.find((product)=>{
            if(product.id === id){
                found = true
                console.log(product)
                productObtained = product
            }
        })
        if(!found){productObtained = "Error: El producto no existe"; console.log("Error: El producto no existe")}
        return (productObtained)
    }

    updateProduct(id,title, description, code, price, status, stock, category, thumbnail){
        this.#getProducts();
        this.products.find((product) => {
            if(product.id === id){
                product.title = title;
                product.description = description;
                product.code = code;
                product.price = price;
                product.status = status;
                product.stock = stock;
                product.category = category;
                product.thumbnail = thumbnail;
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