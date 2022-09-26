import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const {
  EMAIL_ID: user,
  EMAIL_TOKEN: pass,
  EMAIL_SERVICE: service,
  EMAIL_FROM: from,
} = process.env;

var transporter = nodemailer.createTransport({
  service,
  auth: {
    user,
    pass,
  },
});

var mailOptions = {
  from,
  to: "danyal_saleem@hotmail.com",
  subject: "Verification - Link",
};

export const sendEmail = (token) => {
  mailOptions.html = `JUMP-AUTH-TOKEN: ${token}`;
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
