//jshint esversion: 6
import User from '../models/User';
import Chore from '../models/Chore';
import Challenge from '../models/Challenge';
import choreController from './choreController';
import { Mongoose } from "mongoose";
var db = Mongoose.connection;
var dbCollection = db.collections;

let challengeController = {};

challengeController.createChallenge = (req, res) => {
   new Challenge({
        challengeName: req.body.challengeName,
        username: req.body.username,
        challenger: req.body.challenger,
        chores: req.body.chores
   }),
   // Double check that challenge is being passed through, if it doesn't work abstract function out
   (err, Challenge) => {
        if (err) {
            res.redirect('/dashboard');
            throw err;
        }
        dbCollection.Challenge.input(Challenge);
        res.redirect('/dashboard');
   } 
};
