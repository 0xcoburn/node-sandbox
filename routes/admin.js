//3rd party modules
const express = require("express");

const productsController = require("../controllers/productController");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

router.get("/products", productsController.getAdminProducts);

router.get("/edit-product", productsController.getEditProduct);

router.post("/edit-product", productsController.postEditProduct);

module.exports = router;
