const express = require('express');
const upload = require("../../middlewares/upload.file")
const {getTeamsByID,getTeams, postTeams, putTeams, deleteTeams} = require('../controllers/teams.controller');


const TeamsRoutes = express.Router();

TeamsRoutes.get("/id/:id",getTeamsByID)

TeamsRoutes.get('/', getTeams)

TeamsRoutes.post('/', upload.single("foto"), postTeams)

TeamsRoutes.put('/:id', upload.single("foto"), putTeams)

TeamsRoutes.delete('/:id', deleteTeams)

module.exports= TeamsRoutes;