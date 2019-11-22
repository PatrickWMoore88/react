const fs = require("fs");
const file = process.argv[2];
fs.readFile(file, "utf8", function callback(err, data) {
  if (err) {
    return console.log(err);
  } else {
    const lines = data.split("\n").length - 1;
    console.log(lines);
  }
});
