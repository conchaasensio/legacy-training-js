const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  console.log("GET request received for /test!");
  res.json({ message: "pass!" });
});

app.post("/users", async (req, res) => {
  console.log("POST request received for /users!");
  res.status(201).json({ user: {} });
});

module.exports = app;
