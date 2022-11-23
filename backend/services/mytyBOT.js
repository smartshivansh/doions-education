const axios = require("axios");
const { environmentsEnum } = require("../constants");
const { MailService } = require("./mailService");

function mytyBOTStatus() {
  if (process.env.ENV === environmentsEnum.prod) {
    console.log("BOT is running.");
  }
  // } else {
  //   throw new Error("BOT not available in development environment.");
  // }
}

async function mytyBOT(message) {
  // console.log(process.env.ENV);
  if (process.env.ENV === environmentsEnum.prod) {
    console.log("Sending", message);
    try {
      // const message = `${data.name} (${data.email}) asks: ${data.message}`;
      const res = await axios.post(process.env.SLACK_BOT_URL, {
        text: message,
      });
      console.log("Recieved from Slack", res.data);
      return true;
    } catch (error) {
      console.log(error.message);
      console.log("Some error occured while sending message to Slack.");
    }
  } else {
    console.log("BOT not available in development environment.");
  }
}

module.exports = { mytyBOTStatus, mytyBOT };
