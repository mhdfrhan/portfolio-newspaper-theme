document.addEventListener('DOMContentLoaded', function () {

  function tampilkanWaktu() {
    const waktu = new Date();
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const hariIni = hari[waktu.getDay()];
    const bulanIni = bulan[waktu.getMonth()];
    const tanggal = waktu.getDate();
    const tahun = waktu.getFullYear();

    document.getElementById("waktu-sekarang").innerHTML =
      `${hariIni}, ${tanggal} ${bulanIni} ${tahun}`;
  }

  tampilkanWaktu();

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      nav.classList.remove('active');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      nav.classList.remove('active');
    }
  });
});