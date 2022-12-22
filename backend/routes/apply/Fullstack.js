const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FullStack = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  mobile: {
    type: Number,
    default: 1111122222,
    required: true,
  },
});

module.exports = mongoose.model("FullStack", FullStack);
