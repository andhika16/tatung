const route = require('express').Router();

route.get('/', (req, res) => {
    res.render('profil', {
        title: 'Profil Desa'
    });
});


route.get('/profil-geografis',  (req, res) => {
    res.render('profil/geografis', {
        title: 'Profil Geografis',
        subTitle: 'Informasi Geografis Desa tatung'
    });
});


route.get('/profil-sejarah',  (req, res) => {
    res.render('profil/sejarah', {
        title: 'Profil Sejarah',
        subTitle: 'Asal-Usul Desa Tatung'

    });
});



module.exports = route