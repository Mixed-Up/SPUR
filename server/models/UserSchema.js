//jshint esversion: 6
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is required!"
    },
    password: {
        
    }
});