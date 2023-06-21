const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nbaSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        teams: [{type: Schema.Types.ObjectId, ref: 'Team'}],
    },{
        timestamps: true
    }
)

const Nba = mongoose.model('nba', nbaSchema);

module.exports = Nba;