const express = require('express');

const {getContactos, postContactos, putContactos, deleteContactos} = require('../controllers/contacto.controllers');
const contactosRoutes = express.Router();


contactosRoutes.get('/', getContactos)
contactosRoutes.post('/', postContactos)
contactosRoutes.put('/:id', putContactos)
contactosRoutes.delete('/:id', deleteContactos)


module.exports = contactosRoutes;