var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
  {
    id: 1,
    todo: "Implement a REST API"
  }
];

// GET /api/todos
app.get("/api/todos", (req, res, next) => {
  console.log(todoList);
});

// GET /api/todos/:id
app.get("/api/todos/:id", (req, res, next) => {
  console.log(req.params.id);
});

// POST /api/todos
app.post("/api/todos", (req, res, next) => {
  let nextId = owners.length + 1;
  todoList.push({ id: nextId, todo: "Add Items" });
  console.log(todoList);
});

// PUT /api/todos/:id
app.put("/api/todos/:id", (req, res, next) => {
  let id = req.params.id;
  let i = id - 1;
  todoList[i].Completed = "Yes";
  console.log(todoList);
});

// DELETE /api/todos/:id
app.delete("/api/todos/:id", (req, res, next) => {
  let id = req.params.id;
  let i = id - 1;
  todoList.splice(i, 1);
  console.log(todoList);
});

app.listen(3000, function() {
  console.log("Todo List API is now listening on port 3000...");
});
