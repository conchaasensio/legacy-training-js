import {EmailSenderInterface} from './email_sender';
import nodemailer from 'nodemailer';

export class Nodemailer_email_sender extends EmailSenderInterface {
  async send(email) {
    //Send a confirmation email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.email',
      port: 465,
      auth: {
        user: '[USERNAME]',
        pass: '[PASSWORD]',
      },
    });
    // If a proper SMTP server is configured, this line could be uncommented

    // await transporter.sendMail({
    //   from: email.sentFrom,
    //   to: email.sendTo,
    //   subject: email.subject,
    //   html: email.body,
    // });
  }

}