//3rd party modules
const express = require("express");

//my file imports
const shopController = require("../controllers/shopController");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products-list", shopController.getProductsList);

router.get("/products/:productId", shopController.getProductById);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

router.get("/orders", shopController.getOrders);

module.exports = router;
