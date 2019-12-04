var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var owners = [
  {
    id: 1,
    name: "Adam",
    pets: [
      {
        id: 1,
        name: "Vera",
        type: "Dog"
      },
      {
        id: 2,
        name: "Felix",
        type: "Cat"
      }
    ]
  },
  {
    id: 2,
    name: "Kamilah",
    pets: [
      {
        id: 1,
        name: "Doug",
        type: "Dog"
      }
    ]
  }
];

// GET /api/owners
app.get("/api/owners", (req, res, next) => {
  for (i = 0; i < owners.length; i++) {
    console.log(owners[i].name);
  }
});

// GET /api/owners/:id
app.get("/api/owners/:id", (req, res, next) => {
  let id = req.params.id;
  let i = id - 1;
  console.log(owners[i]);
});

// POST /api/owners
app.post("/api/owners", (req, res, next) => {
  let nextId = owners.length + 1;
  owners.push({ id: nextId, name: "Patrick", pets: [] });
  console.log(owners);
});

// PUT /api/owners/:id
app.put("/api/owners/:id", (req, res, next) => {
  let i = req.params.id - 1;
  owners[i].pets = [{ id: 1, name: "Gizmo", type: "Dog" }];
  console.log(owners);
});

// DELETE /api/owners/:id
app.delete("/api/owners/:id", (req, res, next) => {
  let i = req.params.id - 1;
  owners.splice(i, 1);
  console.log(owners);
});

// GET /api/owners/:id/pets
app.get("/api/owners/:id/pets", (req, res, next) => {
  let i = req.params.id - 1;
  let ownersPets = owners[i].pets;
  console.log(ownersPets);
});

// GET /api/owners/:id/pets/:petId
app.get("/api/owners/:id/pets/:petId", (req, res, next) => {
  let ownerId = req.params.id - 1;
  let petId = req.params.petId - 1;
  console.log(owners[ownerId].pets[petId]);
});

// POST /api/owners/:id/pets
app.post("/api/owners/:id/pets", (req, res, next) => {
  let nextId = owners.length + 1;
  let ownerId = req.params.id - 1;
  let ownerPets = owners[ownerId].pets;
  ownerPets.push({ id: nextId, name: "Doggy", type: "Dog" });
  console.log(owners[ownerId]);
});

// PUT /api/owners/:id/pets/:petId
app.put("/api/owners/:id/pets/:petId", (req, res, next) => {
  let ownerId = req.params.id - 1;
  let petId = req.params.petId - 1;
  let ownerPet = owners[ownerId].pets[petId];
  ownerPet.name = "Gizmo";
  console.log(owners[ownerId]);
});

// DELETE /api/owners/:id/pets/:petId
app.delete("/api/owners/:id/pets/:petId", (req, res, next) => {
  let ownerId = req.params.id - 1;
  let petId = req.params.petId - 1;
  let ownerPet = owners[ownerId].pets;
  ownerPet.splice(petId, 1);
  console.log(owners[ownerId]);
});

app.listen(3000, function() {
  console.log("Pets API is now listening on port 3000...");
});
