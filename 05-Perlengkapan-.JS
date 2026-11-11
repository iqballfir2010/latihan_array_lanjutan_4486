const daftarBarang = [
"Buku tulis",
"Pensil",
"Penghapus",
"Spidol"
];

const barangBaru = "Pulpen";        // Pengujian: ""
const barangDicari = "Penghapus";   // Pengujian: "Laptop"
const barangDihapus = "Spidol";     // Pengujian: "Monitor"

// ===== TAHAP 1: Data awal =====
console.log("=== PENGELOLAAN PERLENGKAPAN KELAS ===");

for (let indeks = 0; indeks < daftarBarang.length; indeks++) {
  console.log(`${indeks + 1}. ${daftarBarang[indeks]}`);
}
console.log(`Jumlah barang awal: ${daftarBarang.length}`);

// ===== TAHAP 2: Menambahkan barang =====
console.log("\n[Tambah Barang]");
const namaBersih = barangBaru.trim();

if (namaBersih === "") {
  console.log("Nama barang tidak boleh kosong. Penambahan ditolak.");
} else {
  daftarBarang.push(namaBersih);
  console.log(`${namaBersih} berhasil ditambahkan.`);
}

// ===== TAHAP 3: Mencari barang =====
console.log("\n[Pencarian Barang]");

if (daftarBarang.includes(barangDicari)) {
  const indeksDicari = daftarBarang.indexOf(barangDicari);
  console.log(`${barangDicari} ditemukan pada indeks ${indeksDicari}.`);
} else {
  console.log(`${barangDicari} tidak tersedia.`);
}

// ===== TAHAP 4: Menghapus barang =====
console.log("\n[Hapus Barang]");
const indeksHapus = daftarBarang.indexOf(barangDihapus);

if (indeksHapus !== -1) {
  daftarBarang.splice(indeksHapus, 1);
  console.log(`${barangDihapus} berhasil dihapus.`);
} else {
  console.log(`${barangDihapus} tidak dapat dihapus karena tidak ditemukan.`);
}

// ===== TAHAP 5: Hasil akhir =====
console.log("\n=== DAFTAR BARANG TERBARU ===");

if (daftarBarang.length === 0) {
  console.log("Daftar barang kosong.");
} else {
  for (let indeks = 0; indeks < daftarBarang.length; indeks++) {
    console.log(`${indeks + 1}. ${daftarBarang[indeks]}`);
  }
}
console.log(`Total barang: ${daftarBarang.length}`);