const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user.model"); // this parts gotta go

// @route  GET login
// @desc   gets all users
// @access Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ fullName: 1 });
    res.json(users);
  } catch (err) {
    res.send(err);
  }
});

/* the following post request is not needed as it is already in register.js and 
    in users.js
*/
// //finds a user by their username.
// router.get("/:userId", async (req, res) => {
//   const id = await User.findById(req.body.userId);
//   res.json(id);
// });

// @route POST login
// @desc checks for user authentication
// @access Public
router.post("/", async (req, res) => {
  await User.findOne({ fullName: req.body.fullName })
    .then((user) => {
      if (user == null) {
        return res.status(400).json("Cannot find user");
      }
      try {
        bcrypt.compare(req.body.password, user.password, function (
          err,
          result
        ) {
          if (result) {
            res.send("Login Successful");
          } else {
            res.send("Login Unsuccessful");
          }
        });
      } catch {
        res.status(500).send();
      }
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
