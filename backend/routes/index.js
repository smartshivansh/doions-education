const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.sendStatus(200);
});

router.post("/api/fullstack", (req, res) => {
  const { email, name, mobile } = req.body;

  if (!email || !name || !mobile) {
    res
      .status(200)
      .json(JSON.stringify({ sucess: false, msg: "invalid input" }));
    return;
  }

  const user = Fullstack.create({ email, name, mobile });

  if (user) {
    res
      .status(200)
      .json(JSON.stringify({ sucess: true, msg: "user added successfully" }));
  } else {
    res
      .status(200)
      .json(JSON.stringify({ sucess: false, msg: "invalid input" }));
  }
});

// router.post("/", function (req, res, next) {
//   console.log(req.body);
//   res.status(200).send({ name: "shivjeet", age: 25 });
// });

router.use("/apply", require("./apply"));
router.use("/message", require("./message"));

module.exports = router;
