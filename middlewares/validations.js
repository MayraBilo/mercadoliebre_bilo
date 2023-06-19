const expressValidator = require("express-validator");

const validations = {
  validateCreateProduct: [
    expressValidator
      .body("nombreProducto")
      .notEmpty()
      .withMessage("Debes ingresar un nombre"),
    expressValidator
      .body("precioProducto")
      .notEmpty()
      .withMessage("Debes ingresar el valor del producto"),
  ],
};

module.exports = validations;
