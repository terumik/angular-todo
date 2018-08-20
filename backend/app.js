// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const db = require('./credentials');
const app = express();


app.use(bodyParser.json());

console.log('Connected to server...');

mongoose.connect(db.conn, { useNewUrlParser: true })
.then(()=>{
    console.log('Connected to mLab!');
})
.catch(()=>{
    console.log('Connection failed...');
});


app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, OPTIONS");
    next();
});





module.exports = app;
