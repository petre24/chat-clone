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
router.get('/:postId', async (req,res) =>{
    const userId = await User.findById(req.body.postId);
    res.json(userId);
});

router.post('/', async (req,res) =>{
    const post = new User({
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.email
    });
    const user = await post.save(); //this returns a promise
    res.json(user);
});

module.exports = router;
