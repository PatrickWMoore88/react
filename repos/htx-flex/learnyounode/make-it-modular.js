const myModule = require("./mymodule");
const dirName = process.argv[2];
const extFilter = process.argv[3];

myModule(dirName, extFilter, function(err, list) {
  if (err) {
    return console.error(err);
  } else {
    list.forEach(function(file) {
      console.log(file);
    });
  }
});
