const express = require('express');
const app = express();
const dbConnect = require('./Database/dbConnect');
const userRoutes = require('./routes/User');
const categoryRoutes = require('./routes/Category');
const productRoutes = require('./routes/Product');
const config = require('config');
const PORT = config.get('PORT');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan')

//Applying middleware
//app.use(cors());

app.use(express.json({extended:false}))
app.use(cors());



//Routes
app.use( '/api' , userRoutes );
app.use( '/api' , categoryRoutes);
app.use( '/api' , productRoutes);

//Connecting database
dbConnect();

//Setting port value for server
const port = PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})