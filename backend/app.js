const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { mytyBOTStatus } = require("./services/mytyBOT");
const multer = require("multer");

const Fullstack = require("./routes/apply/Fullstack");
const ProjectIntern = require("./routes/apply/projIntern");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const resumeStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/resumes");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

app.use(multer({ storage: resumeStorage }).single("resume"));

const allowlist = [
  "http://localhost:3002",
  "https://doionsed.herokuapp.com",
  "https://www.education.doions.com/",
  "https://9d77-2405-201-3023-300c-95c0-559b-b188-bb15.ngrok.io/",
];
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

try {
  const db = mongoose.connect(process.env.MONGO_BD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  console.log("not connected" + err.message);
}

const mailer_auth = {
  user: "apikey",
  pass: process.env.SEND_GRID_API_KEY,
};
const transport = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 25,
  secure: false,
  service: "SendGrid",
  requireTLS: false,
  auth: mailer_auth,
});

app.use("/api", require("./routes/index"));

// app.post("/api/projintern", (req, res) => {
//   const { name, email, mobile } = req.body;
//   const user = ProjectIntern.create({
//     name,
//     email,
//     mobile,
//   });
//   if (user) {
//     res
//       .status(200)
//       .json(JSON.stringify({ sucess: true, msg: "user added successfully" }));
//   } else {
//     res
//       .status(200)
//       .json(JSON.stringify({ sucess: false, msg: "invalid input" }));
//   }
// });

// app.post("/api/resume", (req, res) => {
//   const mailOptions = {
//     from: "in@myty.in",
//     to: "shivani.ahirvar@doions.com",
//     subject: "new application for project intern",
//     text: "New response for project intern has been received",
//     attachments: [
//       {
//         content: req.file,
//         filename: req.file.filename,
//         type: "application/pdf",
//         disposition: "attachment",
//       },
//     ],
//   };

//   transport.sendMail(mailOptions, (err, info) => {
//     if (err) {
//       console.log(1111, err);
//     } else {
//       res
//         .status(200)
//         .json(
//           JSON.stringify({ message: "email send sucessfully", sucess: true })
//         );
//       return;
//     }
//   });
// });

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

app.listen(3002, () => {
  console.log("server is listening to port 3002");
});

module.exports = app;
