const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  console.log("GET request received for /test!");
  res.json({ message: "pass!" });
});

// curl -d '{"name":"Juanito", "email":"juanito@hotmail.com"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users
app.post("/users", async (req, res) => {
  console.log("POST request received for /users!");
  const { name, email, password } = req.body;
  console.log(req.body);
  res.status(201).json({ user: {name, email} });
});

module.exports = app;
