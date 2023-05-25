const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.getHome);
router.get("/login.html", mainController.getLogin);
router.get("/register.html", mainController.getRegister);
module.exports = router;
