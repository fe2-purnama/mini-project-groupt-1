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

    $('.plus').click(function() {
        var row = $(this).closest('.main');
        var quantityElement = row.find('.quantity');
        var quantity = parseInt(quantityElement.text());
        quantityElement.text(quantity + 1);
        updateTotalPrice();
        updateJumlahBarang();
    });

    $('.minus').click(function() {
        var row = $(this).closest('.main');
        var quantityElement = row.find('.quantity');
        var quantity = parseInt(quantityElement.text());
        if (quantity > 1) {
            quantityElement.text(quantity - 1);
            updateTotalPrice();
            updateJumlahBarang();
        }
    });

    function updateTotalPrice() {
        var totalHargaBarang = 0;
        var totalHarga = 0;

        $('.main').each(function() {
            var quantity = parseInt($(this).find('.quantity').text());
            var hargaAwal = parseInt($(this).find('.harga').data('harga'));
            var totalItemPrice = quantity * hargaAwal;
            $(this).find('.harga').text('Rp. ' + totalItemPrice.toLocaleString('id-ID'));
            totalHargaBarang += totalItemPrice;
        });

        $('.harga-barang').text('Rp. ' + totalHargaBarang.toLocaleString('id-ID'));

        var pengiriman = parseInt($('.pengiriman').val());
        totalHarga = totalHargaBarang + pengiriman;
        $('.total-harga').text('Rp. ' + totalHarga.toLocaleString('id-ID'));
    }

    $('.pengiriman').change(function() {
        updateTotalPrice();
    });

    $('#promoForm').submit(function(event) {
        event.preventDefault();
        var code = $('#code').val();
        if (code == "DISKON20%") {
            var totalHarga = parseInt($('.total-harga').text().replace('Rp. ', '').replace('.', ''));
            var diskon = totalHarga * 0.2;
            totalHarga -= diskon;
            $('.total-harga').text('Rp. ' + totalHarga.toLocaleString('id-ID'));
        }
    });

    function updateJumlahBarang() {
        var totalQuantity = 0;
        $('.quantity').each(function() {
            totalQuantity += parseInt($(this).text());
        });
        $('.jumlah-barang').text(totalQuantity);
    }
});