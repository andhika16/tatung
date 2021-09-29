const route = require('express').Router();


const data = [
    {
        title: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        title: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        title: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        title: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        title: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        title: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        title: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    }
]



route.get('/', (req, res) => {
    res.render('beranda', {
        title: 'andhika',
        data
    });
});





module.exports = route