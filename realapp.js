require('./config/config');
require('./models/db');

const bodyParser = require('body-parser');
const cors = require('cors'); // expressjs package, just lets you get into the port/route
const express = require('express');
// const Chatkit = require("@pusher/chatkit-server");
const Pusher = require('pusher');

// Define Routers
const usersRouter = require('./routes/api/users');
const rtsIndex = require('./routes/index.router');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

const app = express(); // to define that we're using express

// new Chatkit instance
const pusher = new Pusher({
  app_id: '983143',
  key: 'db8ca11b6e7ab4c94470',
  secret: 'd8a58b0fc570af974e0c',
  cluster: 'mt1',
  encrypted: true,
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res) => {
  if (err.name === 'ValidationError') {
    const valErrors = [];
    Object.keys(err.errors).forEach((key) => valErrors.push(err.errors[key].message));
    res.status(422).send(valErrors);
  }
});

// Use Routes
app.use('/api/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

// Process messages from app front-end
app.post('/message', (req, res) => {
  const payload = req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload);
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
