// event pada saat link diklik
$('.page-scrol').on('click', function (e) {
    
    // ambil isi href
    var tujuan = $(this).attr('href');
    // Tangkap element yang bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body, html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 600);

    e.preventDefault();

});


// // event pada saat link diklik
// $('.page-scrol').on('click', function (e) {
//     // ambil isi href
//     var tujuan = $(this).attr('href');
//     // Tangkap element yang bersangkutan
//     var elemenTujuan = $(tujuan);

//     // pindahkan scroll
//     $('html, body').animate({
//         scrollTop: elemenTujuan.offset().top
//     });

//     e.preventDefault();
// });