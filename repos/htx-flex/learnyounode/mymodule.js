const fs = require("fs");
const path = require("path");

module.exports = function(dirName, extFilter, callback) {
  fs.readdir(dirName, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      list = list.filter(function(file) {
        return path.extname(file) === "." + extFilter;
      });
      callback(null, list);
    }
  });
};
