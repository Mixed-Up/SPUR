var express = require('express');
var router = express.Router();
var auth = require('./userController');
var chore = require('./choreController');

// restrict index for logged in user only
router.get('/', auth.doRegister);

// route to register page
router.get('/register', auth.register);

// route for register action
// router.post('/register', );

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

router.get('/:username/challenge', )

module.exports = router;