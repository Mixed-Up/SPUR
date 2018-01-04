//jshint esversion: 6
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

// Models
// let models = require('./models');
// const CreateTask = require('.models/CreateTask');
// const NewChallenge = require('.models/NewChallenge');

// Routes
// const homepage = require('./routes/index');
// const dashboard = require('./routes/user');
// const createTask = require('./routes/createTask');

const PORT = 8080;
const app = express();

const router = express.Router();

// Import Mongoose connection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Local Strategy for Passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(express.static('public'));
// app.use(express.static('src'));
app.use(morgan);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize Passport and Express-Session
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());
  
// Create User local strategy and serialize/deserialize user via Passport
var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Homepage Route
app.get('/', (req, res) => res.send('Homepage'));
console.log('Homepage');
// app.post('/', (req, res) => res.json('Login Info'));


// User Route
// will the dashboard require a redirect from "/:username" to "/dashboard"?

// app.get('/:username', (req,res) => Friends.findAll({})
//     .then((friend) => {
//         Challenges.findAll({})
//         .then((challenge) => {
//             res.send('Dashboard');
//         });
//     })
// );

// Create Task Route
// app.get('/:username/create-task', (req, res) => res.send('CreateTask'));
// app.post('/:username/create-task', (req, res) => res.json(NewChallenge));

mongoose.connect('mongodb://localhost/spur')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));