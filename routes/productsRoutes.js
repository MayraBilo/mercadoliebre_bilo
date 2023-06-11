const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router.get("/", productController.getProductList);
router.post("/", productController.postProductList);

router.get("/create", productController.getCreate);

router.get("/:id/detail", productController.getProductDetail);

router.delete("/:id/delete", productController.deleteProduct);

router.get("/:id/update", productController.getUpdate);

router.put("/:id/update", productController.updateProduct);

module.exports = router;
