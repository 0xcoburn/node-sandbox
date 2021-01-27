const fs = require("fs").promises;

module.exports = (p) => {
  return fs
    .readFile(p)
    .then((data) => JSON.parse(data))
    .catch((err) => []);
};
