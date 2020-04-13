const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
//Middlewares
app.use(cors())
app.use(bodyParser.json());
//ROUTES
app.get('/',(req,res)=> {
    res.send('we are on home');
});
//Import rputers
const postsRoute = require('./routes/posts');
const clientesRoute = require('./routes/clientes');
app.use('/posts',postsRoute);
app.use('/clientes',clientesRoute);
//Connect to DB
mongoose.connect(
process.env.DB_CONNECTION,
{useNewUrlParser:true},
()=>{console.log('connected to db');
});
//How to we start listening to the server
app.listen(3000);