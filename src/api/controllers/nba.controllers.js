const Nba = require("../models/nba.models");


const getNba = async (req, res) => {
    try {
        const allNbas = await Nba.find().populate("teams", "foto nombre");
        return res.status(200).json(allNbas);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postNba = async (req, res) => {
    try {
        const newNba = new Nba(req.body);
        const createdNba = await newNba.save();
        return res.status(201).json(createdNba);        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putNba = async(req, res) => {
    try {
        const {id} = req.params;
        const putNba = new Nba(req.body);
        putNba._id = id;
        const updatedNba = await Nba.findByIdAndUpdate(id, putNba, {new: true});
        if(!updatedNba){
            return res.status(404).json({message: 'No tenemos NBA con ese ID'}); 
         }
        return res.status(200).json(updatedNba);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteNba = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteNba = await Nba.findByIdAndDelete(id);
        if(!deleteNba){
            return res.status(404).json({message: 'No tenemos NBA con ese ID'}); 
         }
        return res.status(200).json(deleteNba);
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {getNba, postNba, putNba, deleteNba}   