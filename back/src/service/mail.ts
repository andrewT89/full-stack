import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import dotenv from "dotenv";
dotenv.config();

export class Mail {
  constructor(
    public to?: string,
    public subject?: string,
    public message?: string
  ) {}

  sendEmail() {
    const mailOptions = {
      from: process.env.EMAIL,
      to: this.to,
      subject: this.subject,
      html: this.message,
    };

    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
        tls: { rejectUnauthorized: false }
      })
    );

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return err;
      } else {
        return info + "E-mail enviado com sucesso!";
      }
    });
  }
}
