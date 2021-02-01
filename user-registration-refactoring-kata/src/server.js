const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  console.log("GET request received!");
  res.json({ message: "pass!" });
});

module.exports = app;
