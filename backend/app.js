const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { mytyBOTStatus } = require("./services/mytyBOT");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const allowlist = ["http://localhost:3000", "https://doionsed.herokuapp.com"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors());
// const db = mongoose.connect(process.env.MONGOURI, {
//   useNewUrlParser: true,
// });

app.use("/api", require("./routes/index"));

app.use(express.static("../frontend/build"));
// sending build file to client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

try {
  mytyBOTStatus();
} catch (error) {
  console.log(error.message);
}

app.listen(5000, () => {
  console.log("server is listening to port 5000");
});

module.exports = app;
