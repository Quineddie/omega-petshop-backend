//IMPORTACIONES
const express =require("express");
const morgan=require("morgan");
const cors=require("cors");
const mongoose=require("./conexion");

//CONFIGURACIONES
const app = express();
const env = process.env;
const port = env.PORT || 8000;
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ARRANQUE
app.listen(port,()=>{
    console.log("API iniciando en el puerto" +port);
});

// RUTAS BASE
app.get("/",(request,response)=>{
    response.send("Api iniciando");
});

app.use("/api/categorias", require("./rutas/CategoriaRutas"));
app.use("/api/clientes", require("./rutas/ClienteRutas"));
app.use("/api/productos", require("./rutas/ProductoRutas"))
