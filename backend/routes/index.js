const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Fullstack = require("./apply/Fullstack");
const ProjectIntern = require("./apply/projIntern");

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

router.get("/", function (req, res, next) {
  res.sendStatus(200);
});

router.post("/fullstack", (req, res) => {
  const { email, name, mobile } = req.body;

  if (!email || !name || !mobile) {
    res
      .status(200)
      .json(JSON.stringify({ sucess: false, msg: "invalid input" }));
    return;
  }

  const user = Fullstack.create({ email, name, mobile });

  if (!user) {
    return res
      .status(200)
      .json(JSON.stringify({ sucess: false, msg: "invalid input" }));
  }

  const mailOptions = {
    from: "in@myty.in",
    to: "shivani.ahirvar@doions.com",
    subject: "new application fullsatck development course",
    text: `New response for fullstack coursehas been received. details are as follow
     name:- ${name}, email:- ${email}, mobile No:- ${mobile}`,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(1111, err);
    } else {
      return res
        .status(200)
        .json(
          JSON.stringify({ message: "email send sucessfully", sucess: true })
        );
    }
  });
});

// router.post("/", function (req, res, next) {
//   console.log(req.body);
//   res.status(200).send({ name: "shivjeet", age: 25 });
// });

router.post("/projintern", (req, res) => {
  const { name, email, mobile } = req.body;
  const user = ProjectIntern.create({
    name,
    email,
    mobile,
  });
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

router.post("/resume", (req, res) => {
  const mailOptions = {
    from: "in@myty.in",
    to: "shivani.ahirvar@doions.com",
    subject: "new application for project intern",
    text: "New response for project intern has been received",
    attachments: [
      {
        content: req.file,
        filename: req.file.filename,
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(1111, err);
    } else {
      res
        .status(200)
        .json(
          JSON.stringify({ message: "email send sucessfully", sucess: true })
        );
      return;
    }
  });
});

router.post("/contactus", (req, res) => {
  const { email, msg } = req.body;

  if (!email || !msg) {
    return res.status(200).json(JSON.stringify({ sucess: false }));
  }

  const mailOptions = {
    from: "in@myty.in",
    to: "shivani.ahirvar@doions.com",
    subject: "new query on doions education",
    text: `A new query has been registered in doions education. email:- ${email}, message:- ${msg}`,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(1111, err);
    } else {
      res
        .status(200)
        .json(
          JSON.stringify({ message: "email send sucessfully", sucess: true })
        );
      return;
    }
  });
});

router.use("/apply", require("./apply"));
router.use("/message", require("./message"));

module.exports = router;
