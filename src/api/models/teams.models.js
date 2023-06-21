const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const teamSchema = new Schema(
    {
        foto: {type: String, required: true},
        nombre: {type: String, required: true},
        conferencia: {type: String, required: true},
        jugadores: {type: [String], required: true},
       
    },{
        timestamps: true
    }
)


const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
