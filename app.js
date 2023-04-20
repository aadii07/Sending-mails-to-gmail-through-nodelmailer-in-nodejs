const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "adityatat7@gmail.com",
    //enter your one time app password in the password section.To get app password simply go to the security of your gmail account . First step is to enable 2 step authentication 2nd step is to click on app passowrds and  create one app password
    pass:""
  },
});

// send mail with defined transport object
let mailOptions = {
  from: 'adityatat7@gmail.com', // sender address
  to: "aaditya.raj752000@gmail.com", // list of receivers
  subject: "Test Email", // Subject line
  text: "Nodemailer seh mail aaya.", // plain text body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});