const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      pageTitle: "Home",
      prods: products,
      path: "/",
    });
  });
};

exports.getProductsList = (req, res, next) => {
  Product.fetchAll((products) => {
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
  Product.find(productId)
    .then((product) =>
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products-list",
      })
    )
    .catch((err) => console.error(err));

  //send res.render with product in the {}
};

exports.getCart = (req, res) => {
  const cart = Cart.getCart();

  res.render("shop/cart", { pageTitle: "Cart", c: cart, path: "/cart" });
};

exports.postCart = (req, res) => {
  const productId = req.params.productId;
  Product.find(productId)
    .then((product) => Cart.addToCart(product))
    .then(res.redirect("/cart"))
    .catch((err) => console.error(err));
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", { pageTitle: "Checkout", path: "/checkout" });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", { pageTitle: "Orders", path: "/orders" });
};
