//1.Destructuring
//array
const angka = [1, 2, 3];
const [a, b, c] = angka;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

//object
const person = {
    nama: 'John Doe',
    umur: 30,
    kota: 'New York'
  };
  
  const { nama, umur, kota } = person;
  
  console.log(nama); // Output: John Doe
  console.log(umur); // Output: 30
  console.log(kota); // Output: New York

//2. Destructuring dengan Mengambil Sebagian Item
//array
const color = ['merah', 'hijau', 'biru', 'kuning'];
const [colorUtama, colorKedua, ...colorLainnya] = color;

console.log(colorUtama);   // Output: merah
console.log(colorKedua);   // Output: hijau
console.log(colorLainnya); // Output: ['biru', 'kuning']

//object
const buku = {
    judul: 'Pemrograman JavaScript',
    penulis: 'Andi',
    penerbit: 'Gramedia',
    tahunTerbit: 2023
  };
  
  const { judul, penulis } = buku;
  
  console.log(judul);  // Output: Pemrograman JavaScript
  console.log(penulis); // Output: Andi

//3. Destructuring dengan Menggunakan Default Value
//array
const koordinat = [10, 20];
const [x, y = 0] = koordinat;

console.log(x); // Output: 10
console.log(y); // Output: 20

const koordinat2 = [10];
const [x2, y2 = 0] = koordinat2;

console.log(x2); // Output: 10
console.log(y2); // Output: 0

//object
const mobil = {
    merk: 'Toyota',
    model: 'Camry'
  };
  
  const { warna = 'hitam', ...sisaMobil } = mobil;
  
  console.log(warna);     // Output: hitam
  console.log(sisaMobil); // Output: { merk: 'Toyota', model: 'Camry' }

//4. Destructuring dengan Menggunakan Rest Operator
//array
const buah = ['apel', 'pisang', 'mangga', 'anggur'];
const [buah1, buah2, ...buahLainnya] = buah;

console.log(buah1);       // Output: apel
console.log(buah2);       // Output: pisang
console.log(buahLainnya); // Output: ['mangga', 'anggur']

//object
const hewan = {
    jenis: 'Mamalia',
    nama: 'Singa',
    warna: 'Kuning',
    ukuran: 'Besar'
  };
  
  const { jenis, ...sisaHewan } = hewan;
  
  console.log(jenis);      // Output: Mamalia
  console.log(sisaHewan); // Output: { nama: 'Singa', warna: 'Kuning', ukuran: 'Besar' }
