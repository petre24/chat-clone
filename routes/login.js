const express = require('express');
const router = express.Router();
const User = require('../models/user.model');// this parts gotta go

//gets every single user in the database
router.get('/', async (req,res) => {
    try{
        const posts = await User.find();
        res.json(posts);
    }catch(err){
        res.send(err);
    }
});

//finds a user by their username.
router.get('/:postId', async (req,res) =>{
    const post = await User.findById(req.body.postId);
    res.json(post);
});

router.post('/', async (req,res) =>{
    const post = new User({
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.email
    });
    const savedPost = await post.save(); //this returns a promise
    res.json(savedPost);
});

module.exports = router;
