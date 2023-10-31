const express = require('express');
const debug = require('debug')('app')
//const chalk = require('chalk')
//const morgan = require('morgran')
const app = express();
const port = 3000;


//app.use(morgan('combined'));

app.get("/", (req,res) =>{
    res.send('hello Khamvin');
})

app.listen(port, ()=>{
   debug("Listening on port %d",port);   
})