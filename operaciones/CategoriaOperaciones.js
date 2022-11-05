const CategoriaModelo = require("../modelos/CategoriaModelo");
const CategoriaOperaciones = {};

CategoriaOperaciones.crearCategoria = async(req, res) => {
    try {
        const objeto = req.body;
        const categoria = new CategoriaModelo(objeto);
        const categoriaGuardada = await categoria.save();
        if (categoriaGuardada != null) {
            res.status(201).send(categoriaGuardada);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

CategoriaOperaciones.consultarCategorias = async(req, res) => {
    try {
        const filtro = req.query;
        let listacategorias;
        if (filtro.nombre != null) {
            listacategorias = await CategoriaModelo.find({
                "$or" : [ 
                    {"nombre": { $regex:filtro.nombre, $options:"i" }}
                ]
            });
        }
        else {
            listacategorias = await CategoriaModelo.find();
        }
        if (listacategorias.length > 0) {
            res.status(200).send(listacategorias);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(+error);
    }
}

CategoriaOperaciones.consultarCategoria = async(req, res) => {
    try {
        const id = req.params.id;
        const categoria = await CategoriaModelo.findById(id);
        if (categoria != null) {
            res.status(200).send(categoria);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

CategoriaOperaciones.modificarCategoria = async(req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const categoria = {
            nombre: body.nombre,
            activo: body.activo,
            imagen: body.imagen
        }
        console.log(categoria);
        const categoriaActualizada = await CategoriaModelo.findByIdAndUpdate(id, categoria, { new: true });
        res.status(200).send(categoriaActualizada);
    } catch (error) {
        res.status(400).json(error);
    }
}

CategoriaOperaciones.borrarCategoria = async(req, res) => {
    try {
        const id = req.params.id;
        const categoriaBorrada = await CategoriaModelo.findByIdAndDelete(id);
        res.status(200).send(categoriaBorrada);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = CategoriaOperaciones;