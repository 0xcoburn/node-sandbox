const fs = require("fs");
const fsPromises = require("fs").promises;
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

  static find(id) {
    // return a product with a matching id

    //read the db --> fs.readfile
    return fsPromises
      .readFile(p)
      .then((data) => JSON.parse(data))
      .then((products) => products.find((p) => p.id === id))
      .catch((err) => console.error(err));

    //parse json

    //products = [ of objs]

    // for let prod of products
  }
};
