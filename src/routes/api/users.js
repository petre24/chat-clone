const router = require('express').Router();

const User = require('../../models/user.model');

// @route  GET api/users
// @desc   get all users
// @access Public
router.get('/', (req, res) => {
  User.find()
    .sort({ fullName: 1 })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// @route  GET api/users
// @desc   gets a single user
// @access Public
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// @route  POST api/users
// @desc   adds a new user
// @access Public
router.post('/', (req, res) => {
  const newUser = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// @route  DELETE api/users/:id
// @desc   deletes a user
// @access Public
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// @route  POST api/users/:id
// @desc   updates a user
// @access Public
router.post('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.fullName = req.body.fullName;

      user
        .save()
        .then(() => res.json('User updated'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
