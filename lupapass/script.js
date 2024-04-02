$('.btn-reset').click(function() {
    // Memeriksa apakah form input telah diisi
    if ($('#inputField').val() !== '') {
        $('.toast').toast('show'); // Menampilkan toast jika form input telah diisi
    }
});