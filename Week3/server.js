const express = require("express");
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();


app.use(express.static('static'));


app.get('/',(req, res)=>{
    res.render('index.html');
})

app.listen(PORT, ()=>{
    console.log("Server Running");
})