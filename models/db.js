const mongoose = require('mongoose');

//checks if we can connect to mongodb database
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); } 
});

require('./user.model'); //we need this file to work in tandem with the user.controller.js