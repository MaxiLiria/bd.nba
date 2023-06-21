const express = require('express');

const {getNba, postNba, putNba, deleteNba} = require('../controllers/nba.controllers');
const nbaRoutes = express.Router();


nbaRoutes.get('/', getNba)
nbaRoutes.post('/', postNba)
nbaRoutes.put('/:id', putNba)
nbaRoutes.delete('/:id', deleteNba)


module.exports = nbaRoutes;

