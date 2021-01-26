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
  constructor(t, img, price, desc) {
    this.title = t;
    this.img = img;
    this.price = price;
    this.desc = desc;
  }

  save() {
    this.id = Math.random().toString();
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

  static find(id, cb) {
    // return a product with a matching id

    //read the db --> fs.readfile
    fs.readFile(p, (err, data) => {
      if (err) {
        return console.error(err);
      }
      const products = JSON.parse(data);
      const prod = products.filter((p) => p.id === id);
      return cb(prod[0]);
    });
    //parse json

    //products = [ of objs]

    // for let prod of products
  }
};
