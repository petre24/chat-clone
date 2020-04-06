// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// let userSchema = new mongoose.Schema({
//     fullName: {
//         type: String,
//         required: `Full name can't be empty`
//     },
//     email: {
//         type: String,
//         required: `Email can't be empty`,
//         unique: true
//     },
//     password: { //we will be using bcrypt to encrypt the passwords
//         type: String,
//         required: `Password can't be empty`,
//         minlength : [4,'Password must be at least 4 characters long']
//     },
//     saltSecret: String //encrypted pass will be merged with random string
// });                    //safer than direct encryption

// // validation for email
// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// userSchema.pre('save', function (next) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             this.password = hash;
//             this.saltSecret = salt;
//             next();
//         });
//     });
// });

// mongoose.model('User', userSchema); //registers schema as a user

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let userSchema = new mongoose.Schema({ //schema that works in tandem with user.controller.js
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    saltSecret: String //this is for password encryption
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val); //checks email for these values for validity
}, 'Invalid e-mail.');

// Events
userSchema.pre('save', function (next) { //encrypting password with saltSecret and bcyptjs
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('User', userSchema);