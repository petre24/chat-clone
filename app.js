require('./config/config'); 
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors'); //expressjs package, just lets you get into the port/route

const rtsIndex = require('./routes/index.router');

let app = express(); //to define that we're using express

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        let valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));