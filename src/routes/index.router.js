const express = require('express');
// expressjs
const router = express.Router(); // for actual connection

const ctrlUser = require('../controllers/user.controller'); // works in tandem with user.contoller.js

router.post('/register', ctrlUser.register); // this is for the testing on the postman application

module.exports = router;
