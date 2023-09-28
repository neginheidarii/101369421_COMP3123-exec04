const express = require("express");
const app = express();
const SERVER_PORT = 8089;

app.get("/hello", (req, res) => {
  res.send("Hello Express JS");
});



app.get("/user", (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  res.json({firstName,lastName})
});

app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({firstname, lastname});
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
