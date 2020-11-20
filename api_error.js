class ApiError extends Error {
  constructor(message, statusCode=400, extraAttributes={}) {
    super(message);
    this.statusCode = statusCode;
    this.extraAttributes = extraAttributes;
  }
}

module.exports = ApiError;