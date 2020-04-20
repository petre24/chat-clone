const express = require('express');
const router = express.Router();
const Post = require('../models/Post');// this parts gotta go

//gets every single user in the database
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.send(err);
    }
});

//finds a user by their username.
router.get('/:postId', async (req,res) =>{
    const post = await Post.findById(req.body.postId);
    res.json(post);
});

router.post('/', async (req,res) =>{
    const post = new Post({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    const savedPost = await post.save(); //this returns a promise
    res.json(savedPost);
});

module.exports = router;