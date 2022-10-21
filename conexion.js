
const mongoose=require("mongoose");
const username="admin";
const password="admin";
const database="OmegaBD";
const URI="mongodb+srv://"+username+":"+password+"@u34-03baco.brvbw3z.mongodb.net/"+database+"?retryWrites=true&w=majority";

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