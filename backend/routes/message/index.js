const express = require("express");
const router = express.Router();

router.use("/doions-education", require("./doions-education"));
router.use("/courses-contact-us", require("./courses-contact-us"));

module.exports = router;
