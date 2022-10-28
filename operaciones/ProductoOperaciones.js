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

productoOperaciones.buscarProductos = async (req, res)=>{
    try {
        const filtro = req.query;
        let listaproductos;
        if (filtro.q != null) {
            listaproductos = await productoModelo.find({
                "$or" : [ 
                    { "nombre": { $regex:filtro.q, $options:"i" }},
                    { "marca": { $regex:filtro.q, $options:"i" }},
                    { "categorias": { $regex:filtro.q, $options:"i" }}
                ]
            });
        }
        else {
            listaproductos = await productoModelo.find(filtro);
        }
        if (listaproductos.length > 0){
            res.status(200).send(listaproductos);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

productoOperaciones.buscarProducto = async (req, res)=>{
    try {
        const id = req.params.id;
        const producto = await productoModelo.findById(id);
        if (producto != null){
            res.status(200).send(producto);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}


productoOperaciones.modificarProducto = async (req, res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const datosActualizar = {
            marca: body.marca,
            precio: body.precio,
            categorias: body.categorias,
            
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
productoOperaciones.borrarProducto = async (req, res)=>{
    try {
        const id = req.params.id;
        const producto = await productoModelo.findByIdAndDelete(id);
        if (producto != null){
            res.status(200).send(producto);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}
module.exports = productoOperaciones;