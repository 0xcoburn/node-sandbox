const Product = require("../models/product");

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      path: "/admin/products",
      pageTitle: "Admin Products Bitch!",
      prods: products,
    });
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "add product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  data = req.body;
  const product = new Product(data.title, data.img, data.price, data.desc);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res) => {
  res.render("admin/edit-product", {
    path: "admin/products",
    pageTitle: "Edit",
  });
};

exports.postEditProduct = (req, res) => {};
