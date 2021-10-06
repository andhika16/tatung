"use strict"

require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const expresslayout = require('express-ejs-layouts');
const path = require('path');

app.listen(port, () => {
    console.log(`server running port : ${port}`);
});

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











