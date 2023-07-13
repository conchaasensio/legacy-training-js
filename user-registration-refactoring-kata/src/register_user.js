import {StatusCodes} from 'http-status-codes';
import orm from './user_orm_repository';
import nodemailer from 'nodemailer';

export default class Register_user {
  execute(res, password, email, name) {
    if (password.length <= 8 || !password.includes('_')) {
      return res.status(StatusCodes.BAD_REQUEST).
          json('The password is not valid!');
    }
    if (orm.findByEmail(email) !== undefined) {
      return res.status(StatusCodes.BAD_REQUEST).
          json('The email is already in use');
    }

    const user = {
      id: Math.floor(Math.random() * 99999),
      name: name,
      email: email,
      password: password,
    };

    orm.save(user);

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
    /**
     await transporter.sendMail({
    from: "noreply@codium.team",
    to: email,
    subject: "Welcome to Codium",
    html: "<h1>This is the confirmation email</h1>",
  });
     */

    return res.status(StatusCodes.CREATED).json({user});
  }
}