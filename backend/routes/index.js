const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.sendStatus(200);
});

// router.post("/", function (req, res, next) {
//   console.log(req.body);
//   res.status(200).send({ name: "shivjeet", age: 25 });
// });

router.use("/apply", require("./apply"));
router.use("/message", require("./message"));

module.exports = router;
