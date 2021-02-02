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

// curl -d '{"name":"Juanito", "email":"juanito@hotmail.com"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users
app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  if (password.length <= 8 || !password.includes("_")) {
    return res.status(StatusCodes.BAD_REQUEST).json("The password is not valid!");
  } 
  return res.status(StatusCodes.CREATED).json({ user: { name, email } });
});

module.exports = app;
