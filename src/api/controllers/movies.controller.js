const { deleteFile } = require('../../middlewares/delete.file');
const Movie = require("../models/movies.models")

const getMoviesByGenre = async(req, res) => {
    try {
        const {genre} = req.params;
        const movies = await Movie.find({genre: genre}, 'nombre foto');
        if(movies.length == 0){
           return res.status(404).json({message: 'El genero indicado no tiene movies registradas.'}); 
        }
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMoviesByTitle = async(req, res) => {
    try {
        const {title} = req.params;
        const movies = await Movie.find({title: title},);
        if(movies.length == 0){
           return res.status(404).json({message: 'El title indicado no tiene movies registradas.'}); 
        }
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMoviesByID = async(req, res) => {
    try {
        const {id} = req.params;
        const movie = await movie.findById(id);
        if(!movie){
           return res.status(404).json({message: 'No tenemos movies con ese ID'}); 
        }
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovies = async(req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postMovies = async(req, res) => {
    try {
        console.log(req.file);
        const newMovie = new Movie(req.body);
        if (req.file) {
            newMovie.foto = req.file.path;
        }
        const createdMovie = await newMovie.save();   
        return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putMovies = async(req, res) => {
    try {
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        if (req.file) {
            putMovie.foto = req.file.path;
        }
        const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true});
        if(!updatedMovie){
            return res.status(404).json({message: 'No tenemos movies con ese ID'}); 
         }
         if(updatedLibro.portada !== putLibro.portada){
            deleteFile(updatedLibro.portada);
        }
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteMovies = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteMovie = await Movie.findByIdAndDelete(id);
        if(!deleteMovie){
            return res.status(404).json({message: 'No tenemos movies con ese ID'}); 
         }
        return res.status(200).json(deleteMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getMoviesByGenre,getMoviesByTitle,getMoviesByID,getMovies, postMovies, putMovies, deleteMovies}
