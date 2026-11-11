const DaftarBuku = [
"HTML Dasar",
"CSS  Dasar",
"Javascript Dasar",
"PHP Dasar",
    
];
//Ganti "CSS Dasar",Menjadi"CSS modern"
console.log("=== DAFTAR BUKU SEBELUM PERUBAHAN ===");
console.log(DaftarBuku);

const IndeksCss = DaftarBuku.indexOf("CSS Dasar");
console.log('/nIndeks "CSS Dasar": ${IndeksCSS}');

if (IndeksCss !== -1) {
 DaftarBuku.splice(IndeksCss, 1, "Css Modern");
}
else{
    console.log('"Css Dasar" Tidak ditemukan. ');
}
//2. Tambah gift dasar setelah javascript
const indeksJs= DaftarBuku.indexOf("JavaScript Dasar");

if(indeksJs !== -1){
    DaftarBuku.splice(IndeksCss,1,0,"Git dasar")
     console.log('"Git Dasar" ditambahkan setelah "JavaScript Dasar".');
}
 else {
    console.log('"JavaScript Dasar" tidak ditemukan.');
}

//Php di hapus
const indeksPhp = daftarBuku.indexOf("PHP Dasar");

if (indeksPhp !== -1) {
    DaftarBuku.splice(indeksPhp, 1);
    console.log('"PHP Dasar" dihapus.');
} else {
    console.log('"PHP Dasar" tidak ditemukan.');
}

console.log("\n=== DAFTAR BUKU SETELAH PERUBAHAN ===");
console.log(daftarBuku);
console.log('Jumlah Buku Tersisa :$ {DaftarBuku.length}');
