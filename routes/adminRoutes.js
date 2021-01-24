//3rd party modules
const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/products", adminController.getAdminProducts);

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

module.exports = router;
