$(document).ready(function() {

    // Tanggal target (10 April)
    const targetDate = new Date('2024-04-10T23:59:59');

    // Fungsi untuk memperbarui countdown setiap detik
    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        // Jika waktu berakhir
        if (timeDifference < 0) {
            $('#countdown').text('Waktu Habis');
            return;
        }

        // Hitung jumlah hari, jam, dan menit
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        // Format waktu menjadi hari : jam : menit
        const formattedTime = padNumber(days) + ' hari : ' + padNumber(hours) + ' jam : ' + padNumber(minutes) + ' menit';

        // Tampilkan hasil countdown pada elemen dengan id 'countdown'
        $('#countdown').text(formattedTime);
    }

    // Fungsi untuk menambahkan nol di depan angka jika kurang dari 10
    function padNumber(num) {
        return (num < 10) ? '0' + num : num;
    }

    // Panggil fungsi updateCountdown setiap detik
    setInterval(updateCountdown, 1000);

    // Jalankan updateCountdown saat halaman dimuat
    updateCountdown();

    //Carousel
    $('#carouselExampleCaptions').carousel({
        interval: 2000 // Ganti angka 3000 dengan interval waktu dalam milidetik antar slide (misalnya, 3000 untuk 3 detik)
    });

    function changeCarouselImages() {
        var width = $(window).width();
        var newMobileImageUrls = ['https://down-tx-id.img.susercontent.com/id-11134210-7r98v-lt2l3bigclkka4.webp', 'https://down-tx-id.img.susercontent.com/id-11134210-7r98v-lt2l3bhmdto915.webp', 'https://down-tx-id.img.susercontent.com/id-11134210-7r98u-lt2gzswa3tn189.webp'];
        var newDesktopImageUrls = ['./img/Group 1030.svg', './img/Group 1038.svg', './img/Group 1041.svg'];

        var newImageUrls = (width <= 768) ? newMobileImageUrls : newDesktopImageUrls;

        $('.carousel-item img').each(function(index) {
            $(this).attr('src', newImageUrls[index]);
        });
    }

    // Panggil fungsi untuk pertama kali
    changeCarouselImages();

    // Panggil fungsi saat window di-resize
    $(window).resize(function() {
        changeCarouselImages();
    });


    // Membuat katalog produk
    var imageUrls = {
        bawangpete: {
            closed: 'https://i.ibb.co/nzWGpRJ/Geng-hejo.png',
            open: 'https://i.ibb.co/cbL5gFR/sampete.png'
        },
        ori: {
            closed: 'https://i.ibb.co/9b1YTtW/Geng-original.png',
            open: 'https://i.ibb.co/zQTf6hq/orii.png'
        },
        cumikicik: {
            closed: 'https://i.ibb.co/4FqQy1C/Geng-asinan.png',
            open: 'https://i.ibb.co/7rg5kz9/cumikicik.png'
        },
        bakso: {
            closed: 'https://i.ibb.co/dGK7JLx/Geng-teman-makan.png',
            open: 'https://i.ibb.co/qDx0ysX/sambakso.png'
        },
        kulit: {
            closed: 'https://i.ibb.co/vsn6nRd/Geng-abon.png',
            open: 'https://i.ibb.co/s9gLwQ0/samkulit.png'
        },
        jambal: {
            closed: 'https://i.ibb.co/nzWGpRJ/Geng-hejo.png',
            open: 'https://i.ibb.co/J2jP3fM/jambal.png'
        },
        ebi: {
            closed: 'https://i.ibb.co/4FqQy1C/Geng-asinan.png',
            open: 'https://i.ibb.co/qsrHNSF/ebi.png'
        },
        tongkol: {
            closed: 'https://i.ibb.co/4FqQy1C/Geng-asinan.png',
            open: 'https://i.ibb.co/pxmLJwk/tongkool.png'
        },
        cakalang: {
            closed: 'https://i.ibb.co/4FqQy1C/Geng-asinan.png',
            open: 'https://i.ibb.co/tbtQHQ7/cakalang.png'
        },
        terikicik: {
            closed: 'https://i.ibb.co/4FqQy1C/Geng-asinan.png',
            open: 'https://i.ibb.co/TPLz7s0/terikicik.png'
        },
        bonsapi: {
            closed: 'https://i.ibb.co/dGK7JLx/Geng-teman-makan.png',
            open: 'https://i.ibb.co/3T3Fqz9/bonsapi.png'
        },
        paru: {
            closed: 'https://i.ibb.co/dGK7JLx/Geng-teman-makan.png',
            open: 'https://i.ibb.co/MMSwTJv/paru.png'
        },
        bonayam: {
            closed: 'https://i.ibb.co/vsn6nRd/Geng-abon.png',
            open: 'https://i.ibb.co/XYWYT22/bonayam.png'
        },
        // tambahkan untuk produk lainnya ...
    };
    $('.product-card').hover(function() {
        var productId = $(this).attr('id');
        $(this).find('.product-image img').attr('src', imageUrls[productId].open).css({
            'transform': 'scale(1.1)',
            'transition': 'transform 0.3s ease'
        });
    }, function() {
        var productId = $(this).attr('id');
        $(this).find('.product-image img').attr('src', imageUrls[productId].closed).css({
            'transform': 'scale(1)',
            'transition': 'transform 0.3s ease'
        });
    });

    $('.pagination .page-link').on('click', function(e) {
        e.preventDefault(); // Menghentikan perilaku default dari tautan
        var pageNumber = $(this).data('page'); // Mendapatkan nomor halaman dari data-page atribut

        // Lakukan apa pun yang diperlukan saat pengguna mengklik tombol halaman di sini
        console.log('Halaman yang dipilih:', pageNumber);
        // Anda dapat menambahkan logika untuk memuat konten sesuai dengan halaman yang dipilih
    });

    // Menentukan jumlah produk per halaman
    function updatePagination() {
        var windowWidth = $(window).width(); // Lebar halaman saat ini
        var productsPerPage = windowWidth < 576 ? 4 : 8; // Jumlah kartu per halaman
        var totalProducts = $('.produk .col-md-4').length;
        var totalPages = Math.ceil(totalProducts / productsPerPage);

        // Tampilkan halaman pertama dan buat halaman pagination
        $('.pagination').empty();
        for (var i = 1; i <= totalPages; i++) {
            var activeClass = i === 1 ? 'active' : '';
            $('.pagination').append('<li class="page-item ' + activeClass + '"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>');
        }

        // Atur kembali pagination saat halaman dimuat pertama kali
        $('.pagination .page-link').on('click', function(e) {
            e.preventDefault();
            var pageNumber = parseInt($(this).data('page'));

            $('.pagination .active').removeClass('active');
            $(this).closest('.page-item').addClass('active');

            var startIndex = (pageNumber - 1) * productsPerPage;
            var endIndex = startIndex + productsPerPage;
            $('.produk .col-md-4').hide().slice(startIndex, endIndex).show();
        });

        // Tampilkan halaman pertama dan atur event handler
        $('.pagination .page-link').first().click();
    }

    // Panggil fungsi saat halaman dimuat pertama kali
    $(document).ready(function() {
        updatePagination();
    });

    // Panggil fungsi saat ukuran halaman berubah
    $(window).resize(function() {
        updatePagination();
    });


    const testimoni = $(".testimonial-testimoni");
    let currentIndex = 0;
    const intervalTime = 2000; // Waktu interval (ms)

    function showNextTestimoni() {
        // Menampilkan testimoni saat ini
        testimoni.eq(currentIndex).show();

        setTimeout(function() {
            // Menghilangkan testimoni saat ini setelah jangka waktu tertentu
            testimoni.eq(currentIndex).hide();

            // Mengupdate indeks ke testimoni berikutnya
            currentIndex = (currentIndex + 1) % testimoni.length;

            // Memanggil fungsi rekursif untuk menampilkan testimoni berikutnya
            showNextTestimoni();
        }, intervalTime);
    }



    // Panggil fungsi untuk memulai loop
    showNextTestimoni();

    $(document).ready(function() {
        $('.carousel').carousel({
            interval: 2000 // Mengatur interval ganti slide menjadi 2 detik
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // Menghapus kelas active dari semua tautan navigasi
            navLinks.forEach(function(navLink) {
                navLink.classList.remove("active");
            });

            // Menambahkan kelas active ke tautan yang diklik
            link.classList.add("active");
        });
    });
});