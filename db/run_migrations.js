module.exports = async () => {
  const sequelize = require("./sequelize").init();
  const Umzug = require("umzug");

  let umzug = new Umzug({
    storage: "sequelize",
    storageOptions: {
      sequelize
    },
    migrations: {
      params: [sequelize.getQueryInterface(), sequelize.constructor],
      path: process.cwd() + "/db/migrations"
    }
  });

  await umzug.up();
}