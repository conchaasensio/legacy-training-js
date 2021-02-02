const express = require("express");
const server = express();
const createUser = require('./userRegistration');

server.use(express.json());

server.post("/users", async (req, res) => {
  return createUser(res, req.body.password, req.body.name, req.body.email);
});

module.exports = server;
