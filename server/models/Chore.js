const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
    choreInput: String,
    chorePts: { type: Number, min: 1, max: 10 },
}); // on Create Store into array

module.exports = mongoose.model('Chore', ChoreSchema);