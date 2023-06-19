const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");
const multer = require("multer");
const path = require("path");
const validationsMiddlewares = require("../middlewares/validations");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img/products");
  },
  filename: (req, file, cb) => {
    console.log(file);
    let fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

router.get("/", productController.getProductList);

router.post(
  "/",
  [
    upload.single("imagenProducto"),
    validationsMiddlewares.validateCreateProduct,
  ],
  productController.postProduct
);

router.get("/create", productController.getCreate);

router.get("/:id/detail", productController.getProductDetail);

router.delete("/:id/delete", productController.deleteProduct);

router.get("/:id/update", productController.getUpdate);

router.put("/:id/update", productController.updateProduct);

module.exports = router;
