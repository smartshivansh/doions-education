var nodemailer = require("nodemailer");
// var sgTransport = require("nodemailer-sendgrid-transport");

function MailService(message) {
  console.log("message67", message);
  const mailer_auth = {
    user: "apikey",
    pass: "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",
  };

  const transport = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 25,
    secure: false,
    service: "SendGrid",
    requireTLS: false,
    auth: mailer_auth,
  });

  const mailOptions = {
    from: "in@myty.in",
    to: "shivani.ahirvar@doions.com",
    subject: "Student Enquiry form",
    text: message.message,
    html: `<b>${message}</b>`,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent ", info);
    }
  });
  // var options = {
  //   auth: {
  //     api_user: "apikey",
  //     api_key:
  //       "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",
  //   },
  // };
  // var client = nodemailer.createTransport(sgTransport(options));
  // var email = {
  //   from: message.email,
  //   to: "shivani.ahirvar@doions.com",
  //   subject: "Student Enquiry form",
  //   text: message.message,
  //   html: `<b>${message}</b>`,
  // };
  // client.sendMail(email, function (err, info) {
  //   if (err) {
  //     console.log("error in sending mail", err);
  //   } else {
  //     console.log("Message sent78: " + info.response);
  //   }
  // });
}

module.exports = { MailService };
// const nodemailer = require("nodemailer");

// const mailer_auth = {
//   user: "apikey",
//   pass: "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",
// };

// const transport = nodemailer.createTransport({
//   host: "smtp.sendgrid.net",
//   port: 25,
//   secure: false,
//   service: "SendGrid",
//   requireTLS: false,
//   auth: mailer_auth,
// });

//   const mailOptions = {
//     from: "in@myty.in",
//     to: recipient_email,
//     subject: "OTP from myty",
//     html: otpTemp(otp),
//   };

//   transport.sendMail(mailOptions, (err, info) => {
//     if (err) {
//       console.log(err);
//     }
//   });
