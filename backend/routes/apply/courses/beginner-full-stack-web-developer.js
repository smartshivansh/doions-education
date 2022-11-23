const express = require("express");
const router = express.Router();
const { model, Schema } = require("mongoose");
const { mytyBOT } = require("../../../services/mytyBOT");

const applicationSchema = new Schema(
  {
    email: String,
    phone: String,
    name: String,
    startingPreference: String,
    contactTimePreference: String,
  },
  { timestamps: true }
);
const applicationModel = model(
  "beginner-full-stack-web-developer",
  applicationSchema
);

router.post("/", async function (req, res, next) {
  console.log("beginner-full-stack-web-developer", req.body);
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
    const message = `${savedApplication.name}(${
      savedApplication.email
    }) applied for beginner-full-stack-web-developer. \n
    More Info \n ${JSON.stringify(savedApplication, null, 2)}
    `;
    // console.log("message to send", message);
    await mytyBOT(message);
  } catch (error) {
    console.log("other error", error);
    res.status(400).send(error.message);
  }
});

module.exports = router;
