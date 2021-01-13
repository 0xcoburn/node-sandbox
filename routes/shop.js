//3rd party modules
const express = require("express");

//my file imports
const productsController = require("../controllers/productController");

const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;
