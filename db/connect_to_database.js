module.exports = () => {
  const sequelize = require("./sequelize").init();

  sequelize.authenticate()
    .then(() => {
      console.log("Database connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database:");
      throw err;
    });
}