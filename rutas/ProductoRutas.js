const productoOperaciones=require("../operaciones/ProductoOperaciones");
const router = require("express").Router();

router.post("/", productoOperaciones.crearProducto);
router.put("/:id", productoOperaciones.modificarProducto);

module.exports = router;