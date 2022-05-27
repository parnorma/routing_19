const express = require("express");
const router = express.Router();

router.get("/", productController);

module.exports = router;
