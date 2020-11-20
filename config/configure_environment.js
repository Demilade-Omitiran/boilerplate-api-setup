
module.exports = () => {
  const NODE_ENV = process.env.NODE_ENV;
  const path = require("path");

  if (NODE_ENV !== "production") {
    require('dotenv').config({
      path: path.join(__dirname, '..', `/.env.${NODE_ENV}`)
    });
  }
}