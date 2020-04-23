const express = require("express");
const router = express.Router();
const User = require("../models/user.model"); // this parts gotta go

// @route  GET register
// @desc   gets all users in the database
// @access Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send(err);
  }
});

// @route  GET register/:id
// @desc   gets a single user by the specified id
// @access Public
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// @route  POST register
// @desc   adds a new user to the database
// @access Public
router.post("/", async (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    password: req.body.password,
    email: req.body.email,
  });
  const savedUser = await user.save(); //this returns a promise
  res.json(savedUser);
});

module.exports = router;
