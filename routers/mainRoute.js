// definimos rutas, que controladores responden a estas rutas
const path = require("path");
const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
// Para tener solo un enrutador en main podemos partir siempre se main y aca en main
// llamar el enrutador para products o las distintas y luego lo que hago es un use
// para que se vaya a ese enrutador
//const mainController = require("./productsRouter");

router.get("/", mainController.home);
//router.get("/about", mainController.about);
//las rutas dinamicas siempre van al final ejemplo router.get(/:id,mainController.algunaCosa)

//router.use("/products", productRouter);

module.exports = router;
