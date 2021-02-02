const express = require("express");
const app = express();
const { StatusCodes } = require("http-status-codes");

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
    return res.status(StatusCodes.BAD_REQUEST).json("The password is not valid!");
  } 
  return res.status(StatusCodes.CREATED).json({ user: { name, email } });
});

module.exports = app;
