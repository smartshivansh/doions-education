const express = require("express");
const router = express.Router();
const { model, Schema } = require("mongoose");
const { MongoServerError } = require("mongoose");
const { mytyBOT } = require("../../services/mytyBOT");

const messageSchema = new Schema(
  {
    email: {
      unique: false,
      type: String,
    },
    message: String,
    course: String,
  },
  { timestamps: true }
);

const messageModel = model("courses-contact-us", messageSchema);

router.post("/", async (req, res, next) => {
  console.log("courses-contact-us", req.body);
  try {
    const createdMessage = new messageModel(req.body);
    const savedMessage = await createdMessage.save();
    res.send({
      message: savedMessage,
    });
    const message = `${savedMessage.name} (${savedMessage.email}) asks: ${savedMessage.message} for course ${savedMessage.course}`;
    await mytyBOT(message);
  } catch (error) {
    // console.log(error);
    if (error instanceof MongoServerError) {
      res.status(400).send(error.message);
    }

    res.status(500).send(error.message);
  }
});

module.exports = router;
