const express = require('express');
const {login, register} = require('../controllers/user.controllers');
const { isAuth } = require('../../middlewares/auth');
const userRoutes = express.Router();

userRoutes.post('/login', login)
userRoutes.post('/register', register);


module.exports = userRoutes;

