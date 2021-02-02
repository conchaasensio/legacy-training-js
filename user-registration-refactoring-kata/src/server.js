const express = require("express");
const server = express();
const createUser = require('./userRegistration');

server.use(express.json());

server.post("/users", async (req, res) => {
  return createUser(req, res);
});

module.exports = server;
