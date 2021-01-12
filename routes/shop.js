//core modules
const path = require("path");

//3rd party modules
const express = require("express");

//my file imports
const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log("shop:", products);
  res.render("shop", { pageTitle: "shop", prods: products, path: "/" });
});

module.exports = router;
