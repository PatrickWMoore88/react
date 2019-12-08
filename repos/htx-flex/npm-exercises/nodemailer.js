const nodemailer = require("nodemailer");

async function main() {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "patrickwmoore88@gmail.com",
      pass: "Hobojoe1!"
    }
  });
  let info = {
    from: "patrickwmoore88@gmail.com",
    to: "patrickwmoore88@gmail.com, dayman3030.pm@gmail.com",
    subject: "It is alive!!",
    html: "<b>It is working!</b>"
  };
  transporter.sendMail(info, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}

main().catch(console.error);
