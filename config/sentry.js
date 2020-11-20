class Sentry {
  static init() {
    if (!this.initialized) {
      const Sentry = require('@sentry/node');

      Sentry.init({
        dsn: process.env.SENTRY_DSN
      });

      this.Sentry = Sentry;
      this.initialized = true;
    }

    return this.Sentry;
  }
}

module.exports = Sentry;