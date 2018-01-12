const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const request = require('request-promise');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Facebook App ID and Secret
const FACEBOOK_APP_ID = '198276654068437';
const FACEBOOK_APP_SECRET = 'e07ab427d171f1ffb0305f5469cc6ea0';

const PORT = process.env.PORT || 8080;
const app = express();

// Import Mongoose connection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Set up passport for facebook auth
passport.use(new FacebookStrategy({
	clientID: FACEBOOK_APP_ID,
	clientSecret: FACEBOOK_APP_SECRET,
	callbackURL: 'http://localhost:8080/auth/facebook/done'
},
function(accessToken, refreshToken, profile, done) {
	console.log(`${profile.displayName} has successfully authenticated`);
	// console.log(`accessToken=${accessToken}`);
	// console.log(`refreshToken=${refreshToken}`);
	// console.log(`profile=${JSON.stringify(profile,null,2)}`);
	profile.accessToken = accessToken;
	done(null,profile);
}));

// On user logged in
passport.serializeUser(function(user, done) {
	done(null, user);
});

// Deserializes user
passport.deserializeUser(function(user, done) {
	done(null, user);
});

// Manages cookies for session tracking
app.use(session({
	secret: 'super secret',
	resave: false,
	saveUninitialized: false
}));

// Init passport and use sessions
app.use(passport.initialize());
app.use(passport.session());



// Unauthenticated page
// app.get('/', (req, res) => {
// 	let body = '<h1>Facebook OAuth Page</h1>';
// 	if (req.isAuthenticated()) {
// 		body += `Hello ${req.user.displayName}!`;
// 		body += '<a href="/logout">Log Out</a>';
// 	} else {
// 		body += '<a href="/auth/facebook">Log in with Facebook</a>';	
// 	}
// 	res.send(body);
// });

// Route alias to FB login route (unnecessary, just an example)
app.get('/login', (req, res) => res.redirect('/auth/facebook'));

// Log out (destroy session)
app.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

// Login redirect URL
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'user_photos' }));

// OAuth callback URL
app.get('/auth/facebook/done', passport.authenticate('facebook', { 
	successRedirect: '/', 
	failureRedirect: '/login' 
}));

app.use(express.static('build'))
app.get('*', (req, res) => {
	console.log(req.user);
	res.sendFile(__dirname + '/../../build/index.html');
});

// app.get('/', (req, res) => res.send('Homepage'));
// console.log('Homepage');

// Start server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

mongoose.connect('mongodb://localhost/spur')
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

// Check if logged in
function isLoggedIn() {
	return function (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		// res.redirect('/auth/facebook');
		res.sendStatus(401);
	};
}