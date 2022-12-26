const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectIntern = new Schema({
  email: {
    type: String,
    required: true,
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

module.exports = mongoose.model("ProjectIntern", ProjectIntern);
