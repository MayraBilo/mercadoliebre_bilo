const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const { body } = require("express-validator");

const validateRegister = [
  body("nombre").notEmpty().withMessage("Debes ingresar un nombre"),
  body("apellido").notEmpty().withMessage("Debes ingresar un apellido"),
  body("nombreUsuario")
    .notEmpty()
    .withMessage("Debes ingresar un nombreUsuario"),
  body("email").isEmail().withMessage("Debes ingresar un email válido"),
  body("password")
    .notEmpty()
    .withMessage("Debes ingresar una contraseña")
    .bail()
    .isLength({ min: 6 })
    .withMessage("La contraseña tiene que tener un mínimo de 6 caracteres"),
];

router.get("/", mainController.getHome);

router.get("/login", mainController.getLogin);

router.get("/register", mainController.getRegister);

router.post("/", validateRegister, mainController.postRegister);

module.exports = router;
