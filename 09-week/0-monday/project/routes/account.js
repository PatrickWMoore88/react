const express = require("express");
const router = express.Router();

function loginRedirect (req, res, next) {
    if (req.session.name) {
        res.redirect('/account/dashboard');
    }
    else {
        next();
    }
};

function authenticate (req, res, next) {
    if (!req.session.name) {
        res.redirect('/login');
    }
    else {
        next();
    }
};


router.post("/login", function (req, res) {
    if (req.session) {
        req.session.name = req.body.email;
        res.redirect('dashboard');
    }
});

router.get("/", authenticate, (req, res) => {
    console.log(req.session)
    res.render("account");
});

router.get("/dashboard", authenticate, (req, res) => {
    res.render('account/dashboard');
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;