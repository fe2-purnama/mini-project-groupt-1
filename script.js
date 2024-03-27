$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });
    $(window).scroll(function() {
        // Jika posisi scroll lebih besar dari 50px, tambahkan kelas 'navbar-scrolled'
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            // Jika posisi scroll kurang dari atau sama dengan 50px, hapus kelas 'navbar-scrolled'
            $('.navbar').removeClass('navbar-scrolled');
        }
    });
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
    var productsPerPage = 8;
    var totalProducts = $('.produk .col-md-4').length;
    var totalPages = Math.ceil(totalProducts / productsPerPage);

    $('.produk .col-md-4').hide();
    $('.produk .col-md-4:lt(' + productsPerPage + ')').show();

    $('.pagination .page-link').on('click', function(e) {
        e.preventDefault();
        var pageNumber = parseInt($(this).data('page'));

        $('.pagination .active').removeClass('active');
        $(this).closest('.page-item').addClass('active');

        var startIndex = (pageNumber - 1) * productsPerPage;
        var endIndex = startIndex + productsPerPage;
        $('.produk .col-md-4').hide().slice(startIndex, endIndex).show();
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