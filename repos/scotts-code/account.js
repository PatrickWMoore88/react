const express = require("express");
const router = express.Router();
const db = require("../helpers/database");

function loginRedirect(req, res, next) {
  if (req.session.user_id) {
    res.redirect("/account/dashboard");
  } else {
    next();
  }
}

function authenticate(req, res, next) {
  // if not logged in, go to login page
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    // otherwise continue what you were doing
    next();
  }
}

// URI: /account/
router.get("/", authenticate, (req, res) => {
  res.render("account/account");
});

router.get("/registration", (req, res) => {
  res.render("/registration");
});

// router.post("/new", async (req, res) => {
//   try {
//     // create user
//     await db.createUser(req.body.email, req.body.password);
//     res.redirect("/account/login?registrationSuccessful=true");
//   } catch (e) {
//     console.error(e);
//     res.send(e);
//   }
// });

// /account/dashboard
router.get("/dashboard", authenticate, async (req, res) => {
  try {
    let data = {};
    data.favAlbums = await db.getFavorites(req.session.user_id);
    console.log(data.favAlbums);
    res.render("account/dashboard", data);
  } catch (e) {
    res.send(e);
  }
});

router.get("/settings", authenticate, (req, res) => {
  res.render("account/settings");
});

router.post("/add", authenticate, (req, res) => {
  if (req.session) {
    req.session.favMovies.push({ title: req.body.title });
  }
  res.redirect("/account/dashboard");
});

router.get("/login", loginRedirect, function(req, res) {
  let data = {};
  if (req.query.registrationSuccessful) data.registrationSuccessful = true;
  res.render("/account/dashboard", data);
});

router.get("/logout", function(req, res) {
  req.session.destroy();
  res.redirect("/login");
});

// router.post("/login", async function(req, res) {
//   try {
//     // check that user exists with email
//     let user = await db.findUser(req.body.email);
//     if (!user) throw new Error("Incorrect username, please try again");
//     // check that password matches db password
//     if (user.password == req.body.password) {
//       // save user's info to session
//       req.session.user_id = user.id;
//       res.redirect("/account/dashboard");
//     } else {
//       throw new Error("Login failed, incorrect username or password");
//     }
//   } catch (e) {
//     console.error(e);
//     res.send(e);
//   }
// });

router.post("/favorites/add", async (req, res) => {
  try {
    await db.addFavorite(req.session.user_id, req.body.albumId);
    res.redirect("/account/dashboard");
  } catch (e) {
    console.error(e);
    req.send(e);
  }
});

module.exports = router;

// router.get("/dashboard", authenticate, (req, res) => {
//   if (!req.session.favAlbums) req.session.favAlbums = [];
//   res.render("account/dashboard", {
//     favAlbums: req.session.favAlbums,
//     name: req.session.name || "buddy"
//   });
// });

// router.get("/settings", authenticate, (req, res) => {
//   res.render("account/settings");
// });

// router.post("/add", authenticate, (req, res) => {
//   if (req.session) {
//     req.session.favAlbums.push({ title: req.body.title });
//   }
//   res.redirect("/account/dashboard");
// });

// router.get("/login", loginRedirect, function(req, res) {
//   res.render("account/login");
// });

router.get("/logout", function(req, res) {
  req.session.destroy();
  res.redirect("/account/login");
});

// router.post("/login", function(req, res) {
//   console.log(req.body);
//   if (req.session) {
//     console.log("session is working");
//     req.session.name = req.body.name;
//   }
//   // check if user's email and password are valid
//   // save login state for browser
//   res.redirect("/account/dashboard");
// });

// module.exports = router;