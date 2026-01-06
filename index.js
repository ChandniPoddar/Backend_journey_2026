console.log("chai and code");

//express code ... 
const express = require('express') //-- common.js
//or import express from express //-- module.js  only diffrence of the style
const app = express()
const port = 3000;

app.get('/',(req,res)=>{  //if any request - then give callback and send hello world
    res.send('hello world!')
})
//we can handle diffrent request by it 
app.get('/twitter', (req, res)=>{
    res.send('twitter app')
})  //()=>{} -is a call back function

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
})