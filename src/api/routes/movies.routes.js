const express = require('express');
const upload = require("../../middlewares/upload.file")
const {getMoviesByGenre,getMoviesByTitle,getMoviesByID,getMovies, postMovies, putMovies, deleteMovies} = require('../controllers/movies.controller');

const MoviesRoutes = express.Router();

MoviesRoutes.get("/genre/:genre",getMoviesByGenre)

MoviesRoutes.get("/title/:title",getMoviesByTitle)

MoviesRoutes.get("/id/:id",getMoviesByID)

MoviesRoutes.get('/', getMovies)

MoviesRoutes.post('/', upload.single("foto"), postMovies)

MoviesRoutes.put('/:id', upload.single("foto"), putMovies)

MoviesRoutes.delete('/:id', deleteMovies)

module.exports= MoviesRoutes;