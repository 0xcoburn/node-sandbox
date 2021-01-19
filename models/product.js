const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");
const p = path.join(rootDir, "data", "product.json");

const readProductsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    readProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  }

  static fetchAll(cb) {
    readProductsFromFile(cb);
  }
};
