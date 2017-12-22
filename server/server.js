const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
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

app.use(express.static('public'));
// app.use(express.static('src'));
app.use(morgan);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

mongoose.connect('mongodb://localhost/spur');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));