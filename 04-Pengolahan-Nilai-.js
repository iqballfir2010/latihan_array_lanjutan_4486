const nilaiUlangan = [78, 60, 95, 72, 88, 75];


const batasTuntas = 75;

console.log("=== DAFTAR NILAI ULANGAN ===");

// unjuk nilai beserta nomor dengan for
for (let indeks = 0; indeks < nilaiUlangan.length; indeks++) {
    const nomorUrut = indeks + 1;
    console.log(`Siswa ${nomorUrut}: ${nilaiUlangan[indeks]}`);
}

// Hitung tuntas dan belum tuntas dengan for...of
let jumlahTuntas = 0;
let jumlahBelumTuntas = 0;

for (const nilai of nilaiUlangan) {
    if (nilai >= batasTuntas) {
        jumlahTuntas++;
    } else {
        jumlahBelumTuntas++;
    }
}

console.log("=== REKAPITULASI ===");
console.log(`Jumlah Siswa: ${nilaiUlangan.length}`);
console.log(`Jumlah Tuntas: ${jumlahTuntas}`);
console.log(`Jumlah Belum Tuntas: ${jumlahBelumTuntas}`);