import express from 'express';
import nodemailer from 'nodemailer';
import { StatusCodes } from 'http-status-codes';

import orm from './user_orm_repository';
import RegisterUser from './register_user';
import {PasswordIsNotValidException} from './Password_is_not_valid_exception';
import {
  EmailIsAlreadyInUseException
} from './email_is_already_in_use_exception';

const server = express();

server.use(express.json());

const post = (path, callback) =>
  server.post(path, (req, res, next) => callback(req, res).catch(next));

post('/users', async (req, res) => {
  let useCase = new RegisterUser();
  try {
    let password = req.body.password;
    let email = req.body.email;
    let user = useCase.execute(password, email, req.body.name);
    return res.status(StatusCodes.CREATED).json({user});
  } catch (exception) {
    if (exception instanceof PasswordIsNotValidException) {
      return res.status(StatusCodes.BAD_REQUEST).
          json('The password is not valid!');
    } else if (exception instanceof EmailIsAlreadyInUseException) {
      return res.status(StatusCodes.BAD_REQUEST).
          json('The email is already in use');

    }

  }

});

server.use((error, request, response) => {
  return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err.message);
});

export default server;
