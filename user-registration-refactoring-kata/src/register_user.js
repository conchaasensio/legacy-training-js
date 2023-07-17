import orm from './user_orm_repository';
import {PasswordIsNotValidException} from './Password_is_not_valid_exception';
import {
  EmailIsAlreadyInUseException,
} from './email_is_already_in_use_exception';
import {Nodemailer_email_sender} from './nodemailer_email_sender';
import {Email} from './email';

export default class RegisterUser {
  nodemailerEmailSender;

  constructor(emailSender) {
    this.nodemailerEmailSender = emailSender;
  }

  execute(password, userEmail, name) {
    if (password.length <= 8 || !password.includes('_')) {
      throw new PasswordIsNotValidException();
    }
    if (orm.findByEmail(userEmail) !== undefined) {
      throw new EmailIsAlreadyInUseException();
    }

    const user = {
      id: Math.floor(Math.random() * 99999),
      name: name,
      email: userEmail,
      password: password,
    };

    orm.save(user);

    const email = new Email('noreply@codium.team', userEmail, 'Welcome to Codium',
        '<h1>This is the confirmation email</h1>');
    this.nodemailerEmailSender.send(email);

    return user;
  }

}