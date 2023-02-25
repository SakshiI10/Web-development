const express = require("express");
const path=require('path');
const app=express();
const port=80;

//For serving static files.
app.use('/static', express.static('static'))

//Set the template engine as pug
app.set('view engine', 'pug')

//Set the views directory
app.set('views', path.join(__dirname, 'views'))

//Our pug demo end point
app.get("/",(req,res)=>{
    const cont="CONTENT IT IS!"
    const params={'title': 'TITLE IT IS!','content': cont}
    res.status(200).render('pug.pug',params)
})

app.listen(port, ()=>{
    console.log(`The application started successfully at port ${port}`);
});