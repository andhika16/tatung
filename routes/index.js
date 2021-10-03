const route = require('express').Router();

fetch('http://localhost:3000/layanan', async () => {

})

const berita 



route.get('/', (req, res) => {




    res.render('beranda', {
        title: 'Pemdes tatung',
        data,
        berita
    });
});
route.get('/profil', (req, res) => {
    res.render('profil', {
        title: 'Profil Desa'      
    })    
})
route.get('/layanan', (req, res) => {
    res.render('layanan', {
        title: 'Layanan Publik Desa Tatung',
        data
    });
});





module.exports = route