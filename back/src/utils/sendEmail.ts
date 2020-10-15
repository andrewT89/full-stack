import { Mail } from "../service/mail";
import { EMAIL_MESSAGE } from "./const";

export function sendEmail(message: any, user?: any) {
  const mailParams = new Mail();

  mailParams.to = (message.to) ? message.to : message.email;
  mailParams.subject = (message.subject) ? message.subject : EMAIL_MESSAGE.subject;
  mailParams.message = (message.message) ? message.message : EMAIL_MESSAGE.message + user;
  return mailParams.sendEmail();
}
