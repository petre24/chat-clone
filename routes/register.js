const express = require('express');
const router = express.Router();
const User = require('../models/user.model');// this parts gotta go

//gets every single user in the database
router.get('/', async (req,res) => {
    try{
        const user = await User.find();
        res.json(user);
    }catch(err){
        res.send(err);
    }
});

//finds a user by their username.
router.get('/:userId', async (req,res) =>{
    const id = await User.findById(req.body.userId);
    res.json(post);
});

router.post('/', async (req,res) =>{
    const user = new User({
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.email
    });
    const savedUser = await user.save(); //this returns a promise
    res.json(savedUser);
});

module.exports = router;
