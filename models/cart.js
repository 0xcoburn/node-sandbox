const fs = require("fs").promises;
const path = require("path");

const readJSONFile = require("../utils/readFile");
const rootDir = require("../utils/path");
const p = path.join(rootDir, "data", "cart.json");

module.exports = class Cart {
  static addToCart(product) {
    readJSONFile(p)
      .then((cart) => {
        console.log(cart);
        cart.push(product);
        fs.writeFile(p, JSON.stringify(cart));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  static getCart() {
    return readJSONFile(p);
  }
};
