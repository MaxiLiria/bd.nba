const express = require('express');

const {getCine, postCine, putCine, deleteCine} = require('../controllers/cine.controllers');
const cineRoutes = express.Router();


cineRoutes.get('/', getCine)
cineRoutes.post('/', postCine)
cineRoutes.put('/:id', putCine)
cineRoutes.delete('/:id', deleteCine)


module.exports = cineRoutes;