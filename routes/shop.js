//3rd party modules
const express = require("express");

//my file imports
const productsController = require("../controllers/productController");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.get("/", productsController.getProducts);

router.get("/cart", cartController.getCart);

module.exports = router;
