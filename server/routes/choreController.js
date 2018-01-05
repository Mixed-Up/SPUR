import User from '../models/User'
import Chore from '../models/Chore'
import { Mongoose } from "mongoose";

// use chore object within User model to nest the newly created chore each time

const Chore = new Chore();

// on click of "+" button next to chore input, this triggers a post into the chore model