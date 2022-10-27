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

productoOperaciones.modificarProducto = async (req, res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const datosActualizar = {
            tipo: body.tipo,
            precio: body.precio,
            presentacion: body.presentacion,
            
        }
        const productoActualizado = await productoModelo.findByIdAndUpdate(id, datosActualizar, { new : true });
        if (productoActualizado != null) {
            res.status(200).send(productoActualizado);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}
module.exports = productoOperaciones;