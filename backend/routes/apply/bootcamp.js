const express = require("express");
const router = express.Router();
const { model, Schema } = require("mongoose");
const { mytyBOT } = require("../../services/mytyBOT");

const applicationSchema = new Schema(
  {
    email: String,
    contact: String,
    name: String,
    dateOfBirth: String,
    age: String,
    gender: String,
    place: String,
    school: String,
    codingProficiency: String,
  },
  { timestamps: true }
);
const applicationModel = model("bootcamp-application", applicationSchema);

router.post("/", async function (req, res, next) {
  try {
    // const foundApplication = await applicationModel.findOne({
    //   $or: [{ email: req.body.email }, { contact: req.body.contact }],
    // });
    // if (foundApplication) {
    //   console.log("duplicate error");
    //   res.status(400).send({
    //     message: "Application already exists.",
    //   });
    //   return;
    // }

    const createdApplication = new applicationModel(req.body);
    const savedApplication = await createdApplication.save();
    res.send({
      application: savedApplication,
    });
    const message = `${savedApplication.name}(${savedApplication.email}-${savedApplication.contact}) applied for Bootcamp.`;
    // console.log("message to send", message);
    await mytyBOT(message);
  } catch (error) {
    console.log("other error", error);
    res.status(400).send(error.message);
  }
});

module.exports = router;
