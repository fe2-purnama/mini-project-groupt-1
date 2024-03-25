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
});