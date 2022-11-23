const express = require("express");
const router = express.Router();
const { model, Schema, MongoServerError } = require("mongoose");

const { mytyBOT } = require("../../services/mytyBOT");
const { MailService } = require("../../services/mailService");

const messageSchema = new Schema(
  {
    email: {
      unique: false,
      type: String,
    },
    phone: {
      unique: false,
      type: String,
    },
    name: String,
    message: String,
  },
  { timestamps: true }
);

const messageModel = model("doions-education-message", messageSchema);

router.post("/", async (req, res, next) => {
  console.log("asd", req.body);
  try {
    const createdMessage = new messageModel(req.body);
    const savedMessage = await createdMessage.save();
    res.send({
      message: savedMessage,
    });
    const message = `${savedMessage.name} (${savedMessage.email}) asks: ${savedMessage.message}`;
    console.log("____________________________", savedMessage);
    MailService(savedMessage);
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
