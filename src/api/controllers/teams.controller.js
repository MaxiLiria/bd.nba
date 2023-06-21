const { deleteFile } = require('../../middlewares/delete.file');
const Team = require("../models/teams.models")


const getTeamsByID = async(req, res) => {
    try {
        const {id} = req.params;
        const team = await team.findById(id);
        if(!team){
           return res.status(404).json({message: 'No tenemos equipos con ese ID'}); 
        }
        return res.status(200).json(team);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getTeams = async(req, res) => {
    try {
        const allTeams = await Team.find();
        return res.status(200).json(allTeams);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postTeams = async(req, res) => {
    try {
        console.log(req.file);
        const newTeam = new Team(req.body);
        if (req.file) {
            newTeam.foto = req.file.path;
        }
        const createdTeam = await newTeam.save();   
        return res.status(201).json(createdTeam);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putTeams = async(req, res) => {
    try {
        const {id} = req.params;
        const putTeam = new Team(req.body);
        putTeam._id = id;
        if (req.file) {
            putTeam.foto = req.file.path;
        }
        const updatedTeam = await Team.findByIdAndUpdate(id, putTeam, {new: true});
        if(!updatedTeam){
            return res.status(404).json({message: 'No tenemos equipos con ese ID'}); 
         }
         if(updatedTeam.foto !== putTeam.foto){
            deleteFile(updatedTeam.foto);
        }
        return res.status(200).json(updatedTeam);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteTeams = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTeam = await Team.findByIdAndDelete(id);
        if(!deleteTeam){
            return res.status(404).json({message: 'No tenemos equipos con ese ID'}); 
         }
        return res.status(200).json(deleteTeam);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getTeamsByID,getTeams, postTeams, putTeams, deleteTeams}
