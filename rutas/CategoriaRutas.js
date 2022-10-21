const CategoriaOperaciones=require("../operaciones/CategoriaOperaciones");
const router = require('express').Router();
router.get("/",CategoriaOperaciones.consultarCategorias);
router.post("/",CategoriaOperaciones.crearCategoria);

module.exports = router;