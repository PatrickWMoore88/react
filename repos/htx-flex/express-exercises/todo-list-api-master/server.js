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
  res.json(todoList);
});

// GET /api/todos/:id
app.get("/api/todos/:id", (req, res, next) => {
  let todoItem = todoList.find(function(element) {
    return element.id.toString() === req.params.id;
  });
  res.json(todoItem.todo);
});

// POST /api/todos
app.post("/api/todos", (req, res, next) => {
  let nextId = todoList.length + 1;
  todoList.push({ id: nextId, todo: "Add Items" });
  res.json(todoList);
});

// PUT /api/todos/:id
app.put("/api/todos/:id", (req, res, next) => {
  let id = req.params.id;
  let i = id - 1;
  todoList[i].Completed = "Yes";
  res.json(todoList);
});

// DELETE /api/todos/:id
app.delete("/api/todos/:id", (req, res, next) => {
  let id = req.params.id;
  let i = id - 1;
  todoList.splice(i, 1);
  res.json(todoList);
});

app.listen(3000, function() {
  console.log("Todo List API is now listening on port 3000...");
});
