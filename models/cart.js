const db = [];

module.exports = class Cart {
  static addToCart(product) {
    db.push(product);
  }
  static getCart() {
    return db;
  }
};
