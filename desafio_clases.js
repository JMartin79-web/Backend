// Martin Aguirre
// DESAFIO: Clases con ECMAScript y ECMAScript avanzado

class ProductManager {
    constructor() {
        this.products = [];
      }

    addProduct(title, description, price, thumbnail, stock){
        const product ={
            title,
            description,
            price,
            thumbnail,
            code: this.#getMaxCode() +1,
            stock
        }
        // validar que el objeto product tenga todos los campos llenos
        if(Object.values(product).includes(undefined)){console.log("Error: hay un campo vacio")}
        else{
            // valida que no se repita el campo code
            if(!this.products.includes(product.code)){
                this.products.push(product)
            }else{
                console.log("Error: el producto ya está agregado")
            }
        }

    }
   
    getProducts () {
        console.log("Array de productos:")
        console.log(this.products)
    }
    
    getProductById (id) {
        let encontrado = 0
        this.products.find((product)=>{
            if(product.id === id){
                encontrado = 1
                return product;
            }else{encontrado = 0}
        })
        if(encontrado === 0){console.log("Not found")}
    }

    #getMaxCode(){
        let maxCode = 0;
        this.products.map( (product) => {
            if(product.code > maxCode) maxCode = product.code
        })
        return maxCode;
    }
}

// Te dejo esto para que borres los símbolos de comentarios y lo ejecutes para verificar que funciona
/*
const productManager = new ProductManager();
// da array vacio
productManager.getProducts()

// no lo agrega porque le falta completar un campo
productManager.addProduct("producto prueba", "un producto de prueba",200,"sin img")
// agrega un producto
productManager.addProduct("producto prueba", "un producto de prueba",200,"sin img", 20)
// agrega otro producto
productManager.addProduct("otro producto prueba", "otro producto de prueba",300,"sin img", 210)

// devuelve array con los productos
productManager.getProducts()

// no encuentra un producto que no existe
productManager.getProductById(15)

*/