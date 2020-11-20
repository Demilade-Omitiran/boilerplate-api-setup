class Sequelize {
  static init() {
    if (!this.initialized) {
      const Sequelize = require('sequelize');
      const cls = require('continuation-local-storage');
      const namespace = cls.createNamespace('transactionNamespace');
      Sequelize.useCLS(namespace);

      const username = process.env.DB_USERNAME;
      const password = process.env.DB_PASSWORD;
      const host = process.env.DB_HOSTNAME;
      const database = process.env.DB_NAME;

      const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:5432/${database}`);

      this.sequelize = sequelize;
      this.initialized = true;
    }

    return this.sequelize;
  }
}

module.exports = Sequelize;