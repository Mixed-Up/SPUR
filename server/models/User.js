//jshint esversion: 6
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username and Password are required!"
    },
    password: {
        type: String,
        trim: true,
        required: "Username and Password are required!",
        validate: [
            (input) => input.length >= 6,
            "Password needs to be at least 6 characters."
        ]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid email address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    chores: {}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);