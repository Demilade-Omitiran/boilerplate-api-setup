const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Hello!",
    data: {
      platform: "Boilerplate-API",
      version: "1.0"
    }
  });
});

module.exports = router;