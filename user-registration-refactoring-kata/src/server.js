const express = require('express');
const nodemailer = require('nodemailer');
const {StatusCodes} = require('http-status-codes');

const orm = require('./user_orm_repository');
const RegisterUser = require('./register_user');
const {PasswordIsNotValidException} = require(
    './password_is_not_valid_exception');

const server = express();

server.use(express.json());

server.post('/users', async (req, res) => {
  let useCase = new RegisterUser();
  try {
    let password = req.body.password;
    let response = useCase.execute(res, password, req.body.email,
        req.body.name);
    return response;
  } catch (exception) {
    if (exception instanceof PasswordIsNotValidException) {
      return res.status(StatusCodes.BAD_REQUEST).
          json('The password is not valid!');
    }

  }

});

module.exports = server;
