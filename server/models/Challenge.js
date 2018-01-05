// jshint esversion: 6
const mongoose = require('mongoose');
import Chore from './Chore';

const Schema = mongoose.Schema;

let ChallengeSchema = new Schema({
    challengeName: String,
    username: {type: Schema.Types.ObjectId, ref: 'User'},
    challenger: {type: Schema.Types.ObjectId, ref: 'User'},
    // friend_ids: [
    //     {
    //         type: String
    //     }
    // ],
    chores: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Chore'
        }
    ]
});

const Challenge = mongoose.model('Challenge', ChallengeSchema);

module.exports = Challenge;
// class Chore {
//    const choreName = $('#input-name-of-chore-challenge-field').val();
//    mongoose.model(choreName);

//     constructor(choreName, username, challenger, challengerPic, choreArray, pts, {message, prizeUrl, prizeName, prizePic} = {}) {
//         this.choreName = choreName    
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