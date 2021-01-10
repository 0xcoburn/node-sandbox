const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='post'><input name='title' type='text'><button type='submit'>add product></button></form>"
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = router;
