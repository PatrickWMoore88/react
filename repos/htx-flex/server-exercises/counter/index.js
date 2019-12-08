const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

var counter = 0;

app.get("/counter", (req, res, next) => {
  res.send(counter.toString());
});

app.get("/increment", (req, res, next) => {
  counter++;
  res.send(counter.toString());
});

app.get("/decrement", (req, res, next) => {
  counter--;
  res.send(counter.toString());
});

app.get("/reset", (req, res, next) => {
  counter = 0;
  res.send(counter.toString());
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
