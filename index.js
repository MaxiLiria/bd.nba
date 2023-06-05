const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cloudinary = require("cloudinary").v2;


const MoviesRoutes = require('./src/api/routes/movies.routes');
const cineRoutes = require('./src/api/routes/cine.routes');
const userRouter = require('./src/api/routes/user.routes');

const {connect} = require('./src/utils/db');
const { isAuth } = require('./src/middlewares/auth');
const PORT = process.env.PORT;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
  });
const app = express();
connect();


app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 


app.use('/movies', MoviesRoutes);
app.use('/cine' ,isAuth, cineRoutes);
app.use('/users', userRouter);


app.listen(PORT,  () => console.log('listening on port', PORT));