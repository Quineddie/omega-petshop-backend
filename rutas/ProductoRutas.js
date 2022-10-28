const productoOperaciones=require("../operaciones/ProductoOperaciones");
const router = require("express").Router();

router.post("/", productoOperaciones.crearProducto);
router.get("/", productoOperaciones.buscarProductos);
router.get("/:id", productoOperaciones.buscarProducto);
router.put("/:id", productoOperaciones.modificarProducto);
router.delete("/:id", productoOperaciones.borrarProducto);

module.exports = router;