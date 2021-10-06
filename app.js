"use strict"

const dotenv = require('dotenv');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000
const expresslayout = require('express-ejs-layouts');
app.listen(PORT, () => {
    console.log(`server running port : ${PORT}`);
});


dotenv.config({
    path: './config/config.env'
})
// layout
app.set('view engine', 'hbs');
app.use(expresslayout);
app.set('view engine', 'ejs');
// middleware
app.use(express.static('public'));
app.use(express.urlencoded({
    extended:true
}))


app.use('/profil', require('./routes/profil'))
app.use('/', require('./routes/index'))











