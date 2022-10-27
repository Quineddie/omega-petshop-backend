const productoOperaciones=require("../operaciones/ProductoOperaciones");
const router = require("express").Router();

router.post("/", productoOperaciones.crearProducto);

module.exports = router;