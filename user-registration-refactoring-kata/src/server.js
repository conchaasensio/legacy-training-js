import express from 'express';
import nodemailer from 'nodemailer';
import { StatusCodes } from 'http-status-codes';

import orm from './user_orm_repository';
import Register_user from './register_user';

const server = express();

server.use(express.json());

const post = (path, callback) =>
  server.post(path, (req, res, next) => callback(req, res).catch(next));

post('/users', async (req, res) => {
  return new Register_user().execute(req, res);
});

server.use((error, request, response) => {
  return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err.message);
});

export default server;
