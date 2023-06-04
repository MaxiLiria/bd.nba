const Cine = require("../models/cine.models");


const getCine = async (req, res) => {
    try {
        const allCines = await Cine.find().populate("movies", "title director");
        return res.status(200).json(allCines);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postCine = async (req, res) => {
    try {
        const newCine = new Cine(req.body);
        const createdCine = await newCine.save();
        return res.status(201).json(createdCine);        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putCine = async(req, res) => {
    try {
        const {id} = req.params;
        const putCine = new Cine(req.body);
        putCine._id = id;
        const updatedCine = await Cine.findByIdAndUpdate(id, putCine, {new: true});
        if(!updatedCine){
            return res.status(404).json({message: 'No tenemos cine con ese ID'}); 
         }
        return res.status(200).json(updatedCine);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteCine = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteCine = await Cine.findByIdAndDelete(id);
        if(!deleteCine){
            return res.status(404).json({message: 'No tenemos cine con ese ID'}); 
         }
        return res.status(200).json(deleteCine);
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {getCine, postCine, putCine, deleteCine}   