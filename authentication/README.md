# Authentication in Web Apps

This is the OAuth protocol which implements passport.js with Facebook authentication.
For this to work, you need

Passport.js: http://www.passportjs.org/
Facebook developer portal: https://developers.facebook.com/

Process
1. Run `npm install` in this directory
2. Put your Facebook app id in `src/server.js` on line 8
3. Set the Facebook app secret
	* OSX: Put your Facebook app secret in `setEnv.sh`, run `source setEnv.sh` to inject the env variable into your current terminal session
	* Windows: Put your Facebook app secret in `src/server.js` on line 9
4. Run the application using `node src/server.js` and view the page at http://localhost:8080
