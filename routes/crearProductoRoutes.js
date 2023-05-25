const express = require("express");
const router = express.Router();
const crearProductoController = require("../controllers/crearProductoController");

router.get("/crearProducto", crearProductoController.getCrearProducto);

module.exports = router;
