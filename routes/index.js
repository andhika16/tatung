const route = require('express').Router();
const fetch = require('cross-fetch');

// TODO:membuat reusable function agar tidak mengulang penulisan fetch



route.get('/', async (req, res) => {
    const fetchBerita = await fetch('https://pemdes-tatung-json.herokuapp.com/berita')
    const berita = await fetchBerita.json()  
    const fetchLayanan = await fetch('https://pemdes-tatung-json.herokuapp.com/layanan')
    const layanan = await fetchLayanan.json()
   
    res.render('beranda', {
        title: 'Pemdes tatung',
        berita,
        layanan,
    });   
});


route.get('/berita/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    res.send(`hello world ${id}`)
    // res.render('berita/berita-page', {
    //     title: 'Berita Desa Tatung'
    // });
});

route.get('/layanan', async (req, res) => {
    const fetchLayanan = await fetch('https://pemdes-tatung-json.herokuapp.com/layanan')
    const layanan = await fetchLayanan.json()

    res.render('layanan', {
        title: 'Layanan Publik Desa Tatung',
        layanan
    });
});


route.get('/layanan/:id', async (req, res) => {
    const id = req.params.id
    const fetchLayanan = await fetch(`https://pemdes-tatung-json.herokuapp.com/layanan/${id}`)
    const layanan = await fetchLayanan.json()
    res.render('layanan/layanan-page', {
        title: 'Layanan Publik Desa Tatung',
        layanan
    });
});



route.get('/berita', async (req, res) => {
    const fetchBerita = await fetch('https://pemdes-tatung-json.herokuapp.com/berita')
    const berita = await fetchBerita.json() 
    res.render('berita', {
        title: 'Kabar Desa',
        berita
        
    })
})




module.exports = route