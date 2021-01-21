exports.getCart = (req, res) => {
  res.render("shop/cart", { pageTitle: "Cart", path: "/cart" });
};
