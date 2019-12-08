const download = require("download-file");
const fs = require("fs");

var jsonUrl = fs.readFileSync("dog.json");
var urlObject = JSON.parse(jsonUrl);
var url = urlObject.message;
var options = {
  directory: "./public/images",
  filename: "dog.jpg"
};

download(url, options, function(err) {
  if (err) throw err;
  console.log("Woof Woof!");
});
