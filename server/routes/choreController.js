//jshint esversion: 6
import User from '../models/User';
import Chore from '../models/Chore';
import { Mongoose } from "mongoose";
var db = Mongoose.connection;
var dbCollection = db.collections;

let choreController = {};
// use chore object within User model to nest the newly created chore each time

//const Chore = new Chore();

choreController.createChore = (req, res) => {
    new Chore({
        choreInput: req.body.choreInput,
        chorePts: req.body.chorePts
    }),
    (err, chore) => {
        if (err) {
            res.redirect('/dashboard');
            throw err;
        }
        dbCollection.Chore.input(chore);
        res.redirect('/dashboard');
    }
};
// on click of "+" button next to chore input, this triggers a post into the chore model