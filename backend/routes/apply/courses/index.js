const express = require("express");
const router = express.Router();

router.use(
  "/beginner-full-stack-web-developer",
  require("./beginner-full-stack-web-developer")
);
router.use(
  "/basics-of-digital-marketing",
  require("./basics-of-digital-marketing")
);

module.exports = router;
