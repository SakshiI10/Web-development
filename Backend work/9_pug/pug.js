const express = require("express");
const path=require('path');
const app=express();
const fs = require("fs");
const port=80;

//For serving static files.
app.use('/static', express.static('static'))


//Set the template engine as pug
app.set('view engine', 'pug')
app.use(express.urlencoded())
//Set the views directory
app.set('views', path.join(__dirname, 'views'))

//Our pug demo end point
app.get("/",(req,res)=>{
    const cont="CONTENT IT IS!"
    const params={'title': 'TITLE IT IS!','content': cont}
    res.status(200).render('pug.pug',params)
})

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params2 = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('pug.pug', params2);
})

app.listen(port, ()=>{
    console.log(`The application started successfully at port ${port}`);
});