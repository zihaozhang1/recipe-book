const router = require("express").Router();

// Routes for homepage/login

router.get("/", (req, res) => {
  console.log(req.session);
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// Routes for signup
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("login");
});

module.exports = router;