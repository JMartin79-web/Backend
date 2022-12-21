const socket = io()


const productosRenderDiv = document.getElementById("productosRenderDiv")
let btnAgregar = document.getElementById("form-agregar-submit")
let btnEliminar = document.getElementById("form-eliminar-submit")

// AGREGAR PRODUCTO
btnAgregar.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("hace click")
    let formAgregar = document.getElementById("form-agregar").children
    
    let productoAgregar = {
        title: formAgregar.item(0).value,
        description: formAgregar.item(1).value,
        code: formAgregar.item(2).value,
        price: formAgregar.item(3).value,
        status: formAgregar.item(4).value,
        stock: formAgregar.item(5).value,
        category: formAgregar.item(5).value,
        thumbnail: formAgregar.item(6).value
    }
    console.log(productoAgregar)
    socket.emit("addProduct", productoAgregar)

    formAgregar.item(0).value = "",
    formAgregar.item(1).value = "",
    formAgregar.item(2).value = "",
    formAgregar.item(3).value = "",
    formAgregar.item(4).value = true,
    formAgregar.item(5).value = "",
    formAgregar.item(5).value = "",
    formAgregar.item(6).value = ""
})

socket.on("ServerSendProduct", (enviarProducto)=>{
    console.log("Productos recibidos del server: ", enviarProducto)
    let productoUl = document.createElement("ul")
    productoUl.innerHTML = 
    `${enviarProducto.title}
        <li>Id: ${enviarProducto.id}</li>
        <li>Description: ${enviarProducto.description}</li>
        <li>Code: ${enviarProducto.code}</li>
        <li>Price: $${enviarProducto.price}</li>
        <li>Status: ${enviarProducto.status}</li>
        <li>Stock: ${enviarProducto.stock}</li>
        <li>Category: ${enviarProducto.category}</li>
        <li>Thumbnail: ${enviarProducto.thumbnail}</li>
    `
    productosRenderDiv.appendChild(productoUl)
})

// ELIMINAR PRODUCTO
btnEliminar.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("hace click")

    let inputID = document.getElementById("input-eliminar-id").value
    let inputValue = parseInt(inputID)
    inputID.innerHTML = ""
    socket.emit("deleteProduct", inputValue)
})

socket.on("ServerSendProducts", (productosActualizados)=>{
    console.log("Productos recibidos del server: ", productosActualizados)
    productosRenderDiv.innerHTML = ""
    let productos = productosActualizados
    productos.forEach(producto => {
        let productoUl = document.createElement("ul")
        productoUl.innerHTML = 
        `${producto.title}
            <li>Id: ${producto.id}</li>
            <li>Description: ${producto.description}</li>
            <li>Code: ${producto.code}</li>
            <li>Price: $${producto.price}</li>
            <li>Status: ${producto.status}</li>
            <li>Stock: ${producto.stock}</li>
            <li>Category: ${producto.category}</li>
            <li>Thumbnail: ${producto.thumbnail}</li>
        `
        productosRenderDiv.appendChild(productoUl)
    });

})