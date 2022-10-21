//IMPORTACIONES
const express =require("express");
const morgan=require("morgan");
const cors=require("cors");
const mongoose=require("./conexion");

//CONFIGURACIONES
const app=express();
const env=process.env;
const port=env.PORT || 3000;

app.use(morgan("dev"));
app.use(cors());

//ARRANQUE

app.listen(port,()=>{
    console.log("Api iniciando en el puerto" + port);
})

//INDICACION DE LAS RUTAS
app.get( "/",(request,response)=>{
    response.send("Hola bienvenido al grupo U34-03 Baco");

});