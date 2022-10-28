const mongoose=require("mongoose");
const productoSchema=mongoose.Schema({
    nombre : { type: String,maxLength:40, required:true,unique:true },
	marca : { type: String,maxLength:40, required:true,unique:true },
	precio : { type: Number, required: true },
	categoria : { type: String,maxLength:50, required:true,unique:true },
	imagen : {  type: String,maxLength:40, required:true,unique:true },
	disp:{ type:Boolean,required:true },
	cantidad : { type: Number, required: true },

});
module.exports=mongoose.model("productos",productoSchema);