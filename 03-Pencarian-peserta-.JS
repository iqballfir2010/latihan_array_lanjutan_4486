const pesertaLomba = [
    "Alya",
    "Bintang",
    "Citra",
    "Daffa",
    "Nabila"
];

const namaDicari = "Citra"; // Pengujian: ubah menjadi "Raka"

console.log("=== PENCARIAN PESERTA LOMBA ===");

if (pesertaLomba.includes(namaDicari)) {
    const indeks = pesertaLomba.indexOf(namaDicari);
    const nomorUrut = indeks + 1;

    console.log(`Nama: ${namaDicari}`);
    console.log("Status: Terdaftar");
    console.log(`Indeks: ${indeks}`);
    console.log(`Nomor urut: ${nomorUrut}`);
} else {
    console.log(`Nama: ${namaDicari}`);
    console.log("Status: Belum terdaftar");
}