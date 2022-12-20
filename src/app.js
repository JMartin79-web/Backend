import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

import { productsRouter } from './routes/products.router.js';
import { cartsRouter } from './routes/carts.router.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")

app.use("/api/products/", productsRouter);
app.use("/api/carts/", cartsRouter);

app.use(express.static(__dirname+"/public"))

app.get("/", (req,res)=>{
    let testUSer = {
        name: "Martin",
        last_name: "Aguirre"
    }
    res.render("index", testUSer)
})


const PORT = 8080
const server = app.listen(PORT, () => console.log(`🚀 Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err));

