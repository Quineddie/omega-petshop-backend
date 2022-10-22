
const mongoose=require("mongoose");
const username="admin";
const password="admin";
const database="omegapetshop";
const URI="mongodb+srv://"+username+":"+password+"@clusteromegapetshop.fwnu36z.mongodb.net/?retryWrites=true&w=majority";


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