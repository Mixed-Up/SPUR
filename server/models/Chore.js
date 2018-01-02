// jshint esversion: 6
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
    choreInput: String,
    chorePts: String,
}); // on Create Store into array

let choreSchemaArray = [];

if(ChoreSchema) {
    choreSchemaArray.push(ChoreSchema);
}

const ChallengeSchema = new Schema({
    username: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    challenger: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    challengerPic: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    choreSchemaArray// Array to store list of challenges 
});



// class Chore {
//     constructor(username, challenger, challengerPic, choreArray, pts, {message, prizeUrl, prizeName, prizePic} = {}) {
//         this.username = username;
//         this.challenger = challenger;
//         this.challengerPic = challengerPic;
//         this.choreArray = choreArray;
//         this.pts = pts;
//         this.message = message;
//         this.prizeUrl = prizeUrl;
//         this.prizeName = prizeName;
//         this.prizePic = prizePic;
//     }

// }


//createNewChore(newChore, (data) => {
//let chore = challenge.set(data.user, data.challenger, data.fullChallengeArray, data.pts, data.message, data.prize_url, data.prize_name, data.prize_pic)};