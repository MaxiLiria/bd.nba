const Contacto = require("../models/contactos.models")

const getContactos = async(req, res) => {
    try {
        const allContactos = await Contacto.find();
        return res.status(200).json(allContactos);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postContactos = async(req, res) => {
    try {
        console.log(req.file);
        const newContacto = new Contacto(req.body);
        
        const createdContacto = await newContacto.save();   
        return res.status(201).json(createdContacto);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putContactos = async(req, res) => {
    try {
        const {id} = req.params;
        const putContacto = new Contacto(req.body);
        putContacto._id = id;
       
        const updatedContacto = await Contacto.findByIdAndUpdate(id, putContacto, {new: true});
        if(!updatedContacto){
            return res.status(404).json({message: 'No tenemos contactos con ese ID'}); 
         }
       
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteContactos = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteContacto = await Contacto.findByIdAndDelete(id);
        if(!deleteContacto){
            return res.status(404).json({message: 'No tenemos mensajes con ese ID'}); 
         }
        return res.status(200).json(deleteContacto);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getContactos, postContactos, putContactos, deleteContactos}