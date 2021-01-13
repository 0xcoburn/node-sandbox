const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, fileContents) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContents);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => console.log(err));
    });
  }

  static fetchAll(cb) {
    const p = path.join(rootDir, "data", "products.json");
    //read file
    fs.readFile(p, (err, fileContents) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContents));
    });
  }
};
