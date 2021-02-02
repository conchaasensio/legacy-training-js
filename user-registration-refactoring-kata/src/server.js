const express = require('express');
const server = express();
const createUser = require('./userRegistration');
const {StatusCodes} = require('http-status-codes');
const InvalidPasswordError = require('./InvalidPasswordError');
const EmailAlreadyInUseError = require('./EmailAlreadyInUseError');

server.use(express.json());

server.post('/users', (req, res) => {
    return createUser(req.body.password, req.body.name, req.body.email)
    .then(user => res.status(StatusCodes.CREATED).json({user}))
    .catch(err => {
        if (err instanceof InvalidPasswordError) {
            return res
            .status(StatusCodes.BAD_REQUEST)
            .json('The password is not valid!');
        } else if (err instanceof EmailAlreadyInUseError){
            return res
            .status(StatusCodes.BAD_REQUEST)
            .json('The email is already in use');
        }
    });
});

module.exports = server;
