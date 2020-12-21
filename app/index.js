const init = require("./init");
const addErrorResponses = require("./add_error_responses");

const app = init();
addErrorResponses(app);

module.exports = app;