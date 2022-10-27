const productoModelo=require("../modelos/ProductoModelo");
const productoOperaciones={}

productoOperaciones.crearProducto = async (req, res)=>{
    try {
        const objeto = req.body;
        console.log(objeto);
        const producto = new productoModelo(objeto);
        const productoGuardado = await producto.save();
        res.status(201).send(productoGuardado);
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}
module.exports = productoOperaciones;