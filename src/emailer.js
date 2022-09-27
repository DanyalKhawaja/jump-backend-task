import nodemailer from "nodemailer";
import env from "./env.js";

var transporter = nodemailer.createTransport({
  service: env.EMAIL_SERVICE,
  auth: {
    user: env.EMAIL_ID,
    pass: env.EMAIL_TOKEN,
  },
});

export const sendEmail = (token, to) => {
  const mailOptions = {
     html: `JUMP-AUTH-TOKEN: ${token}`,
     from: env.EMAIL_FROM,
    to,
    subject: "Verification - Link",
  };
  return new Promise((res, rej) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) rej(error);
      else res("Email sent: " + info.response);
    });
  });
};
