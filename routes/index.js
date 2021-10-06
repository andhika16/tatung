const route = require('express').Router();
const fetch = require('cross-fetch');

// TODO:membuat reusable function agar tidak mengulang penulisan fetch



route.get('/', async (req, res) => {
    const fetchBerita = await fetch('http://localhost:8000/berita')
    const berita = await fetchBerita.json()  
    const fetchLayanan = await fetch('http://localhost:8000/layanan?limit=5')
    const layanan = await fetchLayanan.json()

    res.render('beranda', {
        title: 'Pemdes tatung',
        berita,
        layanan
    });   
});

route.get('/layanan', async (req, res) => {
    const fetchLayanan = await fetch('http://localhost:8000/layanan')
    const layanan = await fetchLayanan.json()

    res.render('layanan', {
        title: 'Layanan Publik Desa Tatung',
        layanan
    });
});


route.get('/layanan/:id', async (req, res) => {
    const id = req.params.id
    console.log(id);
    const fetchLayanan = await fetch(`http://localhost:8000/layanan/${id}`)
    const layanan = await fetchLayanan.json()
    res.render('layanan/layanan-page', {
        title: 'Layanan Publik Desa Tatung',
        layanan
    });
});





route.get('/berita', async (req, res) => {
    const fetchBerita = await fetch('http://localhost:8000/berita')
    const berita = await fetchBerita.json() 
    res.render('berita', {
        title: 'Kabar Desa',
        berita
        
    })
})


// route.get('/berita/:id', async (req, res) => {
//     const id = req.body.id

    
// })



module.exports = route