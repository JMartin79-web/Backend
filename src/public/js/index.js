const socket = io()


// form agregar
let btnAgregar = document.getElementById("form-agregar-submit")

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
})

socket.on("ServidorSendProducts", (productos)=>{
    console.log("Productos recibidos del server: ", productos)
})



