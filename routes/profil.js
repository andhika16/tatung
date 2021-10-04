const route = require('express').Router();

route.get('/', (req, res) => {
    res.render('profil', {
        title: 'Profil Desa'
    });
});


route.get('/profil-geografis',  (req, res) => {
    res.render('profil/geografis', {
        title: 'profil geografis'
    });
});


route.get('/profil-sejarah',  (req, res) => {
    res.render('profil/sejarah', {
        title: 'profil sejarah'
    });
});



module.exports = route