const axios = require("axios");
const download = require("download-file");
const fs = require("fs");

axios({
  method: "get",
  url: "https://dog.ceo/api/breeds/image/random",
  responseType: "stream"
})
  .then(function(res) {
    console.log(res.data);
    res.data.pipe(fs.createWriteStream("dog.js"));
  })
  .catch(function(err) {
    console.log(err);
  });
