const route = require('express').Router();


const data = [
    {
        judul: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        judul: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        judul: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        judul: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        judul: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        judul: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        judul: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    },
    {
        judul: 'bantuan ipsum dolor',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quaerat?'
    }
]


const berita = [
    {
        gambar:'/img/desa.tatung_1___B8VDOGDgJmK___.jpg',
        tanggal:'9 FEBRUARI 2020',
        judul: 'Pembangunan Batas Sungai Desa Tatung',
        isi : 'Gotong royong sandaran bekerja Masyarakat dukuh tatung lor bekerja bakti penggalian pipa Pamsimas'
    },
    {
        gambar:"/img/desa.tatung_2___CDiLYHHAELS___.jpg",
        tanggal:"6 Agustus 2020",
        judul: "Penutupan Kegiatan KKN",
        isi : "Kegiatan kkn dalam rangka pengembangan parawisata paralayang desa tatung."
    },
    {
        gambar:"/img/desa.tatung___B0xELpWByX7___.jpg",
        tanggal:"5 AGUSTUS 2019",
        judul: "Peresmian PARALAYANG LIGA JATIM SERI 2" ,
        isi : 'Pemerintah Desa Tatung mengucapkan selamat kepada Panitia PARALAYANG LIGA JATIM SERI 2 yaitu Karang Taruna Desa Tatung "Taruna Hebat" telah berhasil dan sukses menyelenggarakan event Liga Paralayang Jawa Timur.'
    },
    {
        gambar:"/img/desa.tatung___B0xELpWByX7___.jpg",
        tanggal:"5 AGUSTUS 2019",
        judul: "Peresmian PARALAYANG LIGA JATIM SERI 2" ,
        isi : 'Pemerintah Desa Tatung mengucapkan selamat kepada Panitia PARALAYANG LIGA JATIM SERI 2 yaitu Karang Taruna Desa Tatung "Taruna Hebat" telah berhasil dan sukses menyelenggarakan event Liga Paralayang Jawa Timur.'
    },
]



route.get('/', (req, res) => {
    res.render('beranda', {
        title: 'Pemdes tatung',
        data,
        berita
    });
});





module.exports = route