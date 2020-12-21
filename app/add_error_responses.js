module.exports = app => {
  app.use((req, res, next) => {
    res.status(404).send();
  });

  app.use((error, req, res, next) => {
    const ApiError = require("./api_error");

    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({
        message: error.message,
        ...error.extraAttributes
      });
    }

    console.log(error.stack);
    res.status(500).json({
      message: "Something went wrong"
    });
  });
};