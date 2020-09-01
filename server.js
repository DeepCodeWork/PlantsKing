const express = require('express');
const app = express();
const dbConnect = require('./Database/dbConnect');
const userRoutes = require('./routes/user');
const config = require('config');
const PORT = config.get('PORT');

//Using the env file
require('dotenv').config();

//Applying middleware
app.use(express.json());

//Routes
app.use( '/api' , userRoutes );

//Connecting database
dbConnect();

//Setting port value for server
const port = PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})