const connectToDatabase = require("./db/connect_to_database");
const runMigrations = require("./db/run_migrations");
const app = require("./app");

const server = {
  async start() {
    connectToDatabase();
    await runMigrations();
    runApp(app);
  }
};


function runApp(app) {
  app.listen(process.env.PORT || 3000, () => console.log("Boilerplate API Started"));
}

server.start();

module.exports = server;