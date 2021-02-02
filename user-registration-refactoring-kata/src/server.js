const express = require("express");
const app = express();
const { StatusCodes } = require("http-status-codes");
const User = require("./user");
const UserOrmRepository = require("./user_orm_repository");
const userRepository = new UserOrmRepository();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  if (password.length <= 8 || !password.includes("_")) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("The password is not valid!");
  }
  if (userRepository.findByEmail(email) !== undefined) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("The email is already in use");
  }
  
  const user = new User(1, name, email, password);
  userRepository.save(user);

  //TODO: send a confirmation email

  return res.status(StatusCodes.CREATED).json({ user });
});

module.exports = app;
