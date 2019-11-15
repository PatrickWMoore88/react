const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", function(_, res) {
  db.getPosts().then(data => {
    res.json(data);
  });
});

module.exports = router;
