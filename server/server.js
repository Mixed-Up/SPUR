const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = 8080;
const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Homepage'));
console.log('GET sent');

mongoose.connect('mongodb://localhost/spur');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));