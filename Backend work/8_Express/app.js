const express = require("express");
const path=require('path');
const app=express();
const port=80;

//For serving static files.
//app.use('/static', express.static('static'))

//Set the template engine as pug
app.set('view engine', 'pug')

//Set the views directory
app.set('views', path.join(__dirname, 'views'))

//Our pug demo end point
app.get("/",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
});

//get and post request for server
app.get("/",(req,res)=>{
    res.send("This is home page of first express app");
});

app.get("/about",(req,res)=>{
    res.send("This is about page of first express app");
});

app.post("/about",(req,res)=>{
    res.send("This is post request forabout page of first express app");
});

app.get("/this",(req,res)=>{
    res.status(404).send("Page not found");
});

app.listen(port, ()=>{
    console.log(`The application started successfully at port ${port}`);
})