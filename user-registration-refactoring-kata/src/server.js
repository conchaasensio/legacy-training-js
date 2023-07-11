const express = require('express');
const nodemailer = require('nodemailer');
const {StatusCodes} = require('http-status-codes');

const orm = require('./user_orm_repository');
const RegisterUser = require('./register_user');

const server = express();

server.use(express.json());

server.post('/users', async (req, res) => {
  return new RegisterUser().execute(req, res);
});

module.exports = server;
