const express = require('express');
const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');

const userRepository = require('./user_orm_repository');

const server = express();

server.use(express.json());

server.post("/users", async (req, res) => {
  if (req.body.password.length <= 8 || !req.body.password.includes("_")) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("The password is not valid!");
  }
  if (userRepository.findByEmail(req.body.email) !== undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("The email is already in use");
  }

  const user = { 
    id: Math.floor(Math.random() * 99999),
    name: req.body.name, 
    email: req.body.email, 
    password: req.body.password,
  };
  
  userRepository.save(user);

  //Send a confirmation email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    port: 465,
    auth: {
      user: "[USERNAME]",
      pass: "[PASSWORD]",
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

  return res.status(StatusCodes.CREATED).json({ user });
});

module.exports = server;
