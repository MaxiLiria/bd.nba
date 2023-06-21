const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cloudinary = require("cloudinary").v2;
const cors = require("cors")

const TeamsRoutes = require('./src/api/routes/teams.routes');
const nbaRoutes = require('./src/api/routes/nba.routes');
const userRouter = require('./src/api/routes/user.routes');
const contactosRoutes = require("./src/api/routes/contactos.routes")

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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH'); //Decimos que metodos tenemos permitidos
  res.header('Access-Control-Allow-Credentials', 'true'); //permitimos la conexión con credenciales(Bearer token)
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // permitimos los headers del tipo Content-Type
  next();
})

app.use(cors(
  {
    origin: "*",  //si sabemos origenes podemos ponerlos en un array
    // origin: "*", // permito todas las conexiones
    credentials: true
  }
))


app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 


app.use('/teams', TeamsRoutes);
app.use('/nba' , nbaRoutes);
app.use('/users', userRouter);
app.use("/contactos", contactosRoutes)


app.listen(PORT,  () => console.log('listening on port', PORT));