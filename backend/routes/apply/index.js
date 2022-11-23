const express = require("express");
const router = express.Router();

router.use("/bootcamp", require("./bootcamp"));
router.use("/courses", require("./courses"));

module.exports = router;
