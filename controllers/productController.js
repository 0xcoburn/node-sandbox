const Product = require("../models/product");

exports.getAdminProducts = (req, res, next) => {
  res.render("admin/products", {
    path: "/admin/products",
    pageTitle: "Admin Bitch!",
  });
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      pageTitle: "shop",
      prods: products,
      path: "/",
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
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res) => {
  res.render("admin/edit-product", {
    path: "admin/products",
    pageTitle: "Edit",
  });
};

exports.postEditProduct = (req, res) => {
  res.render("admin/edit-product", {
    path: "admin/products",
    pageTitle: "Edit",
  });
};
