const CategoriaModelo= require("../modelos/CategoriaModelo");
const CategoriaOperaciones = {} ;

CategoriaOperaciones.crearCategoria = async(req,res) => {
    try {
        const objeto = {
            nombre:"Alimento para perros",
            activo: true,
            imagen:"bolsa.jpg"
        }
        const categoria = new CategoriaModelo(objeto);
        const categoriaGuardada = await categoria.save();
        if(categoriaGuardada != null) {
            res.status(201).send(categoriaGuardada);
        }       
    } catch (error) {
        res.status(400).send("Mala peticion");
        
    }

}
CategoriaOperaciones.consultarCategorias =async (req,res) => {
    try {
        const listacategorias= await CategoriaModelo.find();
        if (listacategorias.length > 0){
        res.status(200).send(listacategorias);
        }
        else{
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala peticion");
        
    }

}

module.exports = CategoriaOperaciones;