const mongoose=require("mongoose");
const productoSchema=mongoose.Schema({
    nombre : { type: String,maxLength:50, required: true },
	tipo : { type: String,maxLength:50, required: true },
	precio : { type: Number, required: true },
	presentacion : { type: String,maxLength:50, required: true },
	cantidad : { type: Number, required: true },

});
module.exports=mongoose.model("productos",productoSchema);