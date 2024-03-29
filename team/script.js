$(document).ready(function() {
    $('#main-image').click(function() {
        console.log('Main image clicked');
        $('#imageModalDetail').modal('show');
    });
    updatePrice();

    $('input[name="size"]').change(function() {
        updatePrice();
    });

    function updatePrice() {
        let price, discount;
        if ($('input[name="size"]:checked').val() === "125 GRAM") {
            price = 23000;
            discount = 11;
        } else if ($('input[name="size"]:checked').val() === "170 GRAM") {
            price = 32000;
            discount = 16;
        } else {
            price = "23.000 - 32.000";
            discount = 11; // Set diskon default
        }

        $('#act-price').text(price.toLocaleString());
        $('#act-price-max').text(price.toLocaleString() === "23.000" ? '32.000' : '36.500');
        $('#discount').text(discount);
    }

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

function change_image(image) {
    var container = document.getElementById("main-image");
    container.src = image.src;
}

// Fungsi untuk menampilkan modal dengan gambar yang dipilih
function showModalWithImage(image) {
    var modalImage = document.getElementById("modal-image");
    modalImage.src = image.src;

    // Tampilkan modal
    $('#imageModalDetail').modal('show');
}

// Fungsi untuk mengubah gambar utama dan menampilkan modal dengan gambar yang dipilih
function changeMainImage(image) {
    change_image(image); // Panggil fungsi untuk mengubah gambar utama
    showModalWithImage(image); // Panggil fungsi untuk menampilkan modal
}



document.addEventListener("DOMContentLoaded", function(event) {

});