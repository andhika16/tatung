"use strict"

const express = require('express');
const app = express();
const port = 3000
const expresslayout = require('express-ejs-layouts');




app.listen(port, () => {
    console.log(`server running port : ${port}`);
});

// layout
app.use(expresslayout);
app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
// middleware
app.use(express.static('public'));
app.use(express.urlencoded({
    extended:true
}))


app.use('/', require('./routes/index'))











