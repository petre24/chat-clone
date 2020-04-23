const mongoose = require('mongoose'); //for mongoose with mongodb

const User = mongoose.model('User');

module.exports.register = (req, res, next) => { //for register
    let user = new User();
    user.fullName = req.body.fullName; //these are the requirements for the JSON file which adds to database
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => { //here is where we try to save the users info into the database, but if an email is already assigned, then dupe sends
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}