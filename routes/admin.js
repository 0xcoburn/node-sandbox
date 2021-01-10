//core modules
const path = require("path");

//3rd party modules
const express = require("express");

//my file imports
const rootDir = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = router;
