const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/index", {
      pageTitle: "Home",
      prods: products,
      path: "/",
    });
  });
};

exports.getProductsList = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      pageTitle: "products",
      prods: products,
      path: "/products-list",
    });
  });
};

exports.getProductById = (req, res, next) => {
  const productId = req.params.productId;
  //get product by id
  const product = Product.find(productId)
    .then((product) =>
      res.render("shop/product-detail", {
        prod: product,
        pageTitle: "Product Details",
        path: "/products-list",
      })
    )
    .catch((err) => console.error(err));

  //send res.render with product in the {}
};

exports.getCart = (req, res) => {
  res.render("shop/cart", { pageTitle: "Cart", path: "/cart" });
};

exports.postCart = (req, res) => {
  res.redirect("shop/cart");
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", { pageTitle: "Orders", path: "/orders" });
};
