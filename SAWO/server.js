const express = require("express");
const app = express();


app.use(express.static('static'))


app.set("view engine", "ejs");


app.get('/add',(req, res)=>{
    res.render('add_todo')
})

app.post('/add',(req, res)=>{
    res.redirect('all')
})

app.get('/all',(req, res)=>{
    res.render('list_todo')
})

app.get('/',(req, res)=>{
    res.render('home')
})

app.listen(3000, ()=>{
    console.log("Server Running")
})