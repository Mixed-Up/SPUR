//jshint esversion: 6
import User from '../models/User'
import Chore from '../models/Chore'
import { Mongoose } from "mongoose";


// use chore object within User model to nest the newly created chore each time

//const Chore = new Chore();

User.createChore = (req, res) => {
    new Chore({
        choreInput: req.body.choreInput,
        chorePts: req.body.chorePts
    }),
    (err, chore) => {
        if (err) {
            res.redirect('/dashboard');
            throw err;
        }
        dbCollections.User.Challenge.input(chore);
        res.redirect('/dashboard');
    }
};
// on click of "+" button next to chore input, this triggers a post into the chore model