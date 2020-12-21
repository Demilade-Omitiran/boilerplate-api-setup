module.exports = () => {
  const express = require("express");
  const router = require('../config/router');
  const cors = require('cors');
  const configureEnvironment = require("../config/configure_environment");
  const Sentry = require("../config/sentry").init();
  const expressRequestId = require("express-request-id")();
  const rateLimit = require("express-rate-limit");

  // Setup Environment Variables
  configureEnvironment();

  const app = express();

  // The request handler must be the first middleware on the app
  app.use(Sentry.Handlers.requestHandler());

  app.disable("x-powered-by");
  app.use(expressRequestId);
  app.use(cors());
  app.options("*", cors());

  const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 60
  });

  app.use(limiter);

  // parse application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: false }));

  // parse json
  app.use(express.json());

  app.use("/", router);

  return app;
};