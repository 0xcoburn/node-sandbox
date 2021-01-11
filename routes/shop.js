//core modules
const path = require("path");

//3rd party modules
const express = require("express");

//my file imports
const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
