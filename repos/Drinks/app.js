const express = require("express");
const models = require("./models");
const app = express();

app.set("view engine", "pug");

app.get("/", async(req, res) =>{
    let data = {};
    data.categories = await models.Category.findAll();
    res.render("index", data);
});

app.get("/categories/:id", async (req, res) =>{
    let data = {};
    data.categories = await models.Category.findOne({
        where: {id: req.params.id}
    });
    res.render("category", data);
});

app.listen(3000);