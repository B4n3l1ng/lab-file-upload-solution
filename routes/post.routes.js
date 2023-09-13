const router = require("express").Router();
const mongoose = require("mongoose");

const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");

router.get("/newPost", isLoggedIn, (req, res) => {
  res.render("users/newPost");
});

module.exports = router;
