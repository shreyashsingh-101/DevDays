const express = require("express");
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const app = express();
const model = require('./models/models')

app.use(express.urlencoded());
app.use(express.json());

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();


app.use(express.static('static'));

app.post('/', (req,res)=>{
    console.log(req.body);
    model.create(req.body);
    res.send("Submitted Succesfully!");
})

app.get('/',(req, res)=>{
    res.render('index.html');
})

app.listen(PORT, ()=>{
    console.log("Server Running");
})