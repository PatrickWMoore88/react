var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

var counter = 1;
var todoList = [];

// GET /api/todos
app.get("/api/todos", (req, res, next) => {
  res.json(todoList);
});

// GET /api/todos/:id
app.get("/api/todos/:id", (req, res, next) => {
  let todoItem = todoList.find(function(element) {
    return element.id.toString() === req.params.id;
  });
  res.json(todoItem);
});

// POST /api/todos
app.post("/api/todos", (req, res, next) => {
  counter++;
  let todoItem = req.body;
  (todoItem = { id: counter, ...todoItem }), todoList.push(todoItem);
  res.json(todoList);
});

// PUT /api/todos/:id
app.put("/api/todos/:id", (req, res, next) => {
  let todoItem = todoList.find(function(element) {
    return element.id.toString() === req.params.id;
  });
  if (typeof todoItem == "undefined") {
    res.json("Sorry that was incorrect! Please try again.");
  }
  var newTodo = req.body;
  var todoKeys = Object.keys(newTodo);

  todoKeys.forEach(function(key) {
    todoItem[key] = newTodo[key];
  });
  res.json(todoList);
});

// DELETE /api/todos/:id
app.delete("/api/todos/:id", (req, res, next) => {
  let removeIndex = todoList.findIndex(function(todoItem) {
    return todoItem.id.toString() === req.params.id;
  });
  if (removeIndex >= 0) {
    todoList.splice(removeIndex, 1);
  }
  res.json(todoList);
});

app.listen(3000, function() {
  console.log("Todo List API is now listening on port 3000...");
});
