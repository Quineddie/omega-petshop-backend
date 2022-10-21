
const mongoose=require("mongoose");
const username="admin";
const password="admin";
const database="OmegaBD";
const URI="mongodb+srv://"+username+":"+password+"@cluster0.sqnofbx.mongodb.net/?retryWrites=true&w=majority";

const conectar = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("Atlas esta en linea");
    }catch (error){
        console.log ("Error en la conexion." +error);
    }

}
conectar();

module.exports=mongoose;