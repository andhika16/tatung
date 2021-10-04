const route = require('express').Router();
const fetch = require('cross-fetch');


route.get('/', async (req, res) => {
    const fetchBerita = await fetch('http://localhost:3000/berita')
    const berita = await fetchBerita.json()  
    const fetchLayanan = await fetch('http://localhost:3000/layanan')
    const layanan = await fetchLayanan.json()

    res.render('beranda', {
        title: 'Pemdes tatung',
        berita,
        layanan
    });   
});

route.get('/layanan-halaman', async (req, res) => {
    const fetchLayanan = await fetch('http://localhost:3000/layanan')
    const layanan = await fetchLayanan.json()

    res.render('layanan', {
        title: 'Layanan Publik Desa Tatung',
        layanan
    });
});





module.exports = route