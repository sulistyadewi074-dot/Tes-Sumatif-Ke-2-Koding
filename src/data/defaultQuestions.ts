import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (20 BUTIR SOAL: NO. 1 - 20)
  // Seluruh soal berkategori: MUDAH untuk Siswa Kelas 6 SD
  // Setiap soal memiliki 4 opsi jawaban (A, B, C, D) dengan 1 jawaban benar.
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Algoritma',
    difficulty: 'Mudah',
    text: 'Dalam pelajaran koding, urutan langkah-langkah teratur dan logis untuk menyelesaikan suatu pekerjaan atau masalah disebut...',
    options: [
      { id: 'A', text: 'Algoritma' },
      { id: 'B', text: 'Monitor' },
      { id: 'C', text: 'Keyboard' },
      { id: 'D', text: 'Internet' },
    ],
    correctAnswer: 'A',
    explanation: 'Algoritma adalah serangkaian langkah-langkah teratur dan logis yang disusun untuk menyelesaikan suatu pekerjaan atau masalah.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Contoh Algoritma Sehari-hari',
    difficulty: 'Mudah',
    text: 'Perhatikan urutan mencuci tangan berikut:\n1. Basahi tangan dengan air bersih\n2. Gunakan sabun secukupnya\n3. Gosok telapak dan punggung tangan\n4. Bilas dengan air mengalir\n5. Keringkan dengan handuk bersih\n\nUrutan petunjuk di atas merupakan contoh penerapan...',
    options: [
      { id: 'A', text: 'Algoritma dalam kehidupan sehari-hari' },
      { id: 'B', text: 'Perbaikan layar komputer' },
      { id: 'C', text: 'Permainan tebak angka' },
      { id: 'D', text: 'Pengiriman pesan rahasia' },
    ],
    correctAnswer: 'A',
    explanation: 'Petunjuk langkah demi langkah yang berurutan untuk mencuci tangan adalah contoh nyata dari algoritma dalam aktivitas kita sehari-hari.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Simbol Flowchart: Terminator',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar simbol bangun oval berikut!\n\nDalam bagan alir (flowchart), simbol Terminator tersebut berfungsi untuk menandai...',
    imageSvg: `<svg width="260" height="85" viewBox="0 0 260 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="12" width="210" height="60" rx="30" fill="#E0F2FE" stroke="#0284C7" stroke-width="3" />
      <text x="130" y="49" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0369A1" text-anchor="middle">MULAI / SELESAI</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Titik Mulai (Start) atau Selesai (End) dari suatu alur' },
      { id: 'B', text: 'Perhitungan penjumlahan matematika' },
      { id: 'C', text: 'Perintah mencetak ke printer' },
      { id: 'D', text: 'Mematikan layar monitor' },
    ],
    correctAnswer: 'A',
    explanation: 'Simbol berbentuk oval dinamakan Terminator, digunakan di awal bagan alir sebagai "Mulai" dan di akhir bagan alir sebagai "Selesai".',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Simbol Flowchart: Input / Output',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar bangun jajar genjang berikut!\n\nSimbol jajar genjang pada bagan alir (flowchart) digunakan untuk proses...',
    imageSvg: `<svg width="260" height="85" viewBox="0 0 260 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="45,12 245,12 215,72 15,72" fill="#FEF3C7" stroke="#D97706" stroke-width="3" />
      <text x="130" y="49" font-family="sans-serif" font-size="15" font-weight="bold" fill="#B45309" text-anchor="middle">INPUT / OUTPUT</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Memasukkan data (Input) atau menampilkan hasil (Output)' },
      { id: 'B', text: 'Memulai program dari awal' },
      { id: 'C', text: 'Mengulang langkah sebanyak 10 kali' },
      { id: 'D', text: 'Menghapus file yang rusak' },
    ],
    correctAnswer: 'A',
    explanation: 'Bangun jajar genjang melambangkan kegiatan memasukkan data (seperti mengetik nama) atau menampilkan hasil (seperti menampilkan nilai di layar).',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Simbol Flowchart: Process',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar bangun persegi panjang berikut!\n\nDalam bagan alir (flowchart), simbol persegi panjang digunakan untuk...',
    imageSvg: `<svg width="260" height="85" viewBox="0 0 260 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="12" width="210" height="60" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="3" />
      <text x="130" y="49" font-family="sans-serif" font-size="15" font-weight="bold" fill="#15803D" text-anchor="middle">PROSES (PROCESS)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Melakukan tindakan pengolahan atau perhitungan instruksi' },
      { id: 'B', text: 'Mengakhiri program' },
      { id: 'C', text: 'Menghidupkan daya listrik' },
      { id: 'D', text: 'Memasukkan kartu memori' },
    ],
    correctAnswer: 'A',
    explanation: 'Simbol persegi panjang (Process) melambangkan proses pengerjaan, tindakan, atau operasi perhitungan (misal: menghitung Luas = Sisi x Sisi).',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Simbol Flowchart: Decision',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar bangun belah ketupat berikut!\n\nSimbol belah ketupat (Decision) digunakan untuk...',
    imageSvg: `<svg width="260" height="95" viewBox="0 0 260 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="130,10 235,48 130,86 25,48" fill="#FEE2E2" stroke="#DC2626" stroke-width="3" />
      <text x="130" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#B91C1C" text-anchor="middle">KEPUTUSAN</text>
      <text x="130" y="62" font-family="sans-serif" font-size="11" fill="#7F1D1D" text-anchor="middle">(Ya / Tidak)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Memilih keputusan kondisi logika dengan pilihan Ya atau Tidak' },
      { id: 'B', text: 'Menuliskan judul program' },
      { id: 'C', text: 'Mewarnai gambar karakter' },
      { id: 'D', text: 'Menyimpan suara lagu' },
    ],
    correctAnswer: 'A',
    explanation: 'Simbol belah ketupat (Decision) digunakan untuk memilih keputusan logika percabangan, misalnya: "Apakah nilainya lebih dari 60? Jika Ya Lulus, jika Tidak Remedial".',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Simbol Flowchart: Flowline (Garis Alir)',
    difficulty: 'Mudah',
    text: 'Tanda panah (flowline) yang menghubungkan satu simbol ke simbol lainnya pada bagan alir berfungsi untuk...',
    options: [
      { id: 'A', text: 'Menunjukkan arah aliran jalannya langkah-langkah program' },
      { id: 'B', text: 'Menghapus simbol yang salah' },
      { id: 'C', text: 'Mengunci layar komputer' },
      { id: 'D', text: 'Menghitung waktu mundur' },
    ],
    correctAnswer: 'A',
    explanation: 'Tanda panah atau garis alir (flowline) menunjukkan arah urutan ke mana langkah selanjutnya harus dijalankan.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Struktur Algoritma: Runtunan (Sequence)',
    difficulty: 'Mudah',
    text: 'Struktur algoritma yang menjalankan perintah satu demi satu secara berurutan dari atas ke bawah tanpa melompat disebut struktur...',
    options: [
      { id: 'A', text: 'Runtunan (Sequence)' },
      { id: 'B', text: 'Pengacakan' },
      { id: 'C', text: 'Penghapusan' },
      { id: 'D', text: 'Pemadaman' },
    ],
    correctAnswer: 'A',
    explanation: 'Struktur runtunan (Sequence) adalah susunan langkah yang dijalankan secara berurutan dan teratur dari langkah pertama hingga langkah terakhir.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Struktur Algoritma: Percabangan (If-Else)',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat logika berikut:\n"JIKA hari hujan, MAKA bawalah payung. JIKA TIDAK, MAKA pakailah topi."\n\nKalimat di atas merupakan contoh dari struktur...',
    options: [
      { id: 'A', text: 'Percabangan (Selection / If-Else)' },
      { id: 'B', text: 'Perulangan tanpa henti' },
      { id: 'C', text: 'Pencarian kata sandi' },
      { id: 'D', text: 'Pemasangan kabel listrik' },
    ],
    correctAnswer: 'A',
    explanation: 'Percabangan (If-Else) digunakan untuk memilih tindakan yang berbeda berdasarkan kondisi yang terjadi (hujan atau tidak hujan).',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Struktur Algoritma: Perulangan (Looping)',
    difficulty: 'Mudah',
    text: 'Kucing animasi dalam Scratch ingin melangkah maju sebanyak 5 kali. Agar kita tidak perlu mengetik perintah "Maju 1 langkah" sebanyak lima kali, kita dapat menggunakan perintah...',
    options: [
      { id: 'A', text: 'Perulangan (Looping / Repeat 5 kali)' },
      { id: 'B', text: 'Hapus karakter' },
      { id: 'C', text: 'Tutup jendela program' },
      { id: 'D', text: 'Kecilkan suara musik' },
    ],
    correctAnswer: 'A',
    explanation: 'Perintah perulangan (looping) memungkinkan suatu perintah dijalankan berulang kali secara otomatis sesuai jumlah yang diinginkan.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Berpikir Komputasional: Dekomposisi',
    difficulty: 'Mudah',
    text: 'Ketika Doni ingin membersihkan ruang kelas, ia membagi tugas menjadi 3 bagian: menyapu lantai, merapikan meja, dan menghapus papan tulis. Sikap Doni memecah tugas besar menjadi tugas-tugas kecil disebut...',
    options: [
      { id: 'A', text: 'Dekomposisi (Decomposition)' },
      { id: 'B', text: 'Pengabaian tugas' },
      { id: 'C', text: 'Koneksi internet' },
      { id: 'D', text: 'Pencetakan dokumen' },
    ],
    correctAnswer: 'A',
    explanation: 'Dekomposisi adalah cara memecah masalah atau pekerjaan besar menjadi bagian-bagian yang lebih kecil agar lebih mudah diselesaikan.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Berpikir Komputasional: Pengenalan Pola',
    difficulty: 'Mudah',
    text: 'Siti melihat bahwa lampu lalu lintas selalu menyala dengan urutan: Merah, lalu Kuning, lalu Hijau, lalu kembali lagi ke Merah. Kemampuan mengamati kesamaan urutan berulang ini disebut...',
    options: [
      { id: 'A', text: 'Pengenalan Pola (Pattern Recognition)' },
      { id: 'B', text: 'Membongkar mesin' },
      { id: 'C', text: 'Menghapus warna' },
      { id: 'D', text: 'Membuat kabel' },
    ],
    correctAnswer: 'A',
    explanation: 'Pengenalan pola adalah kemampuan mengenali kesamaan, keteraturan, atau pola yang berulang dari suatu kejadian atau data.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Berpikir Komputasional: Abstraksi',
    difficulty: 'Mudah',
    text: 'Saat menggambar peta jalan menuju ke sekolah, Wayan hanya menggambar jalan utama dan belokan penting saja, tanpa menggambar warna pagar rumah warga. Sikap memilih hal-hal penting dan mengabaikan hal yang tidak penting disebut...',
    options: [
      { id: 'A', text: 'Abstraksi (Abstraction)' },
      { id: 'B', text: 'Kerusakan peta' },
      { id: 'C', text: 'Penyalinan foto' },
      { id: 'D', text: 'Perbaikan komputer' },
    ],
    correctAnswer: 'A',
    explanation: 'Abstraksi adalah teknik fokus pada informasi yang penting saja dan membuang atau mengabaikan rincian yang tidak dibutuhkan.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Logika Nilai Kebenaran (True dan False)',
    difficulty: 'Mudah',
    text: 'Dalam logika komputer, suatu pernyataan kondisi hanya memiliki dua kemungkinan nilai kebenaran, yaitu...',
    options: [
      { id: 'A', text: 'Benar (True) atau Salah (False)' },
      { id: 'B', text: 'Besar atau Kecil' },
      { id: 'C', text: 'Pagi atau Malam' },
      { id: 'D', text: 'Merah atau Biru' },
    ],
    correctAnswer: 'A',
    explanation: 'Logika komputer bekerja menggunakan nilai kebenaran Boolean yang terdiri dari dua keadaan: Benar (True) atau Salah (False).',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Logika Operator AND',
    difficulty: 'Mudah',
    text: 'Siswa diperbolehkan mengikuti lomba jika:\n(Membawa Pensil) DAN (Membawa Kartu Siswa).\n\nJika Budi membawa pensil, tetapi LUPA membawa kartu siswa, apakah Budi boleh mengikuti lomba?',
    options: [
      { id: 'A', text: 'Tidak boleh, karena kata "DAN" mengharuskan kedua syarat terpenuhi' },
      { id: 'B', text: 'Boleh, karena pensil sudah dibawa' },
      { id: 'C', text: 'Boleh mengikuti setengah lomba saja' },
      { id: 'D', text: 'Budi langsung menjadi juara' },
    ],
    correctAnswer: 'A',
    explanation: 'Operator "DAN" (AND) mengharuskan kedua syarat bernilai benar agar hasilnya bernilai benar. Karena kartu siswa tidak dibawa, maka syarat belum lengkap.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Logika Operator OR',
    difficulty: 'Mudah',
    text: 'Untuk membeli pensil di koperasi sekolah, siswa dapat membayar menggunakan:\n(Uang Tunai) ATAU (Kupon Koperasi).\n\nAni hanya membawa kupon koperasi dan tidak membawa uang tunai. Apakah Ani dapat membeli pensil tersebut?',
    options: [
      { id: 'A', text: 'Bisa, karena kata "ATAU" cukup memerlukan salah satu syarat terpenuhi' },
      { id: 'B', text: 'Tidak bisa sama sekali' },
      { id: 'C', text: 'Harus menunggu esok hari' },
      { id: 'D', text: 'Kupon koperasi harus disobek menjadi dua' },
    ],
    correctAnswer: 'A',
    explanation: 'Operator "ATAU" (OR) bernilai benar jika salah satu syarat saja sudah terpenuhi. Ani bisa membeli pensil karena sudah membawa kupon koperasi.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Pengertian Bug dalam Koding',
    difficulty: 'Mudah',
    text: 'Dalam pembuatan program komputer, jika terjadi kesalahan atau kekeliruan logika yang membuat karakter game tidak bisa bergerak, kesalahan tersebut disebut...',
    options: [
      { id: 'A', text: 'Bug (Error / Kesalahan program)' },
      { id: 'B', text: 'Speaker' },
      { id: 'C', text: 'Mouse' },
      { id: 'D', text: 'Kertas' },
    ],
    correctAnswer: 'A',
    explanation: 'Bug adalah istilah untuk kesalahan atau kejanggalan pada kode program yang menyebabkan program tidak berjalan seperti yang diharapkan.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Pengertian Debugging',
    difficulty: 'Mudah',
    text: 'Kegiatan mencari letak kesalahan (bug) pada alur kode program lalu memperbaikinya agar program berjalan lancar dinamakan...',
    options: [
      { id: 'A', text: 'Debugging' },
      { id: 'B', text: 'Fotokopi' },
      { id: 'C', text: 'Mengetik cepat' },
      { id: 'D', text: 'Mematikan stopkontak' },
    ],
    correctAnswer: 'A',
    explanation: 'Debugging adalah proses memeriksa, menemukan, dan membetulkan bug atau kesalahan pada susunan perintah program.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Pemrograman Blok Visual: Tombol Bendera Hijau',
    difficulty: 'Mudah',
    text: 'Pada aplikasi koding Scratch, blok perintah "ketika bendera hijau diklik" (when green flag clicked) biasanya digunakan untuk...',
    options: [
      { id: 'A', text: 'Memulai jalannya animasi atau game' },
      { id: 'B', text: 'Menghapus seluruh gambar' },
      { id: 'C', text: 'Mematikan komputer' },
      { id: 'D', text: 'Membeli komputer baru' },
    ],
    correctAnswer: 'A',
    explanation: 'Bendera hijau pada Scratch berfungsi sebagai tombol Start/Mulai untuk menjalankan skrip perintah yang telah disusun.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Variabel dalam Permainan Koding',
    difficulty: 'Mudah',
    text: 'Dalam permainan menangkap buah, kita membutuhkan wadah untuk mencatat angka skor yang bertambah setiap kali buah tertangkap. Tempat penyimpanan angka skor ini disebut...',
    options: [
      { id: 'A', text: 'Variabel (Variable)' },
      { id: 'B', text: 'Kabel data' },
      { id: 'C', text: 'Layar proyektor' },
      { id: 'D', text: 'Kertas karton' },
    ],
    correctAnswer: 'A',
    explanation: 'Variabel adalah tempat di memori program untuk menyimpan suatu nilai yang dapat berubah-ubah, seperti skor, nyawa, atau waktu.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (PGK) (5 BUTIR SOAL: NO. 21 - 25)
  // Seluruh soal berkategori: MUDAH untuk Siswa Kelas 6 SD
  // Memungkinkan siswa memilih LEBIH DARI SATU jawaban yang benar.
  // =========================================================================
  {
    id: 21,
    type: 'pgk',
    topic: 'Ciri-Ciri Algoritma yang Jelas dan Teratur',
    difficulty: 'Mudah',
    text: 'Pilihlah SEMUA pernyataan yang BENAR mengenai ciri-ciri dari urutan langkah algoritma yang baik! (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Langkah-langkahnya tersusun rapi dan teratur secara berurutan' },
      { id: 'B', text: 'Setiap instruksi jelas dan mudah dipahami maksudnya' },
      { id: 'C', text: 'Memiliki tujuan akhir yang jelas dan berhenti setelah selesai' },
      { id: 'D', text: 'Harus membingungkan dan tidak boleh diketahui urutannya' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Algoritma yang baik memiliki langkah yang berurutan, instruksi yang jelas (tidak membingungkan), dan memiliki titik akhir yang jelas.',
  },
  {
    id: 22,
    type: 'pgk',
    topic: 'Pasangan Simbol Flowchart dan Fungsinya',
    difficulty: 'Mudah',
    text: 'Manakah pasangan simbol bangun datar pada bagan alir (flowchart) berikut yang TEPAT? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Bangun Oval berfungsi untuk Mulai (Start) atau Selesai (End)' },
      { id: 'B', text: 'Bangun Persegi Panjang berfungsi untuk Proses atau Tindakan' },
      { id: 'C', text: 'Bangun Belah Ketupat berfungsi untuk Pilihan Keputusan (Ya / Tidak)' },
      { id: 'D', text: 'Bangun Bintang berfungsi untuk menyalakan kipas angin' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Oval untuk Mulai/Selesai, Persegi panjang untuk Proses, dan Belah ketupat untuk Keputusan kondisi. Bentuk bintang bukan simbol flowchart.',
  },
  {
    id: 23,
    type: 'pgk',
    topic: 'Contoh Perulangan (Looping) di Sekolah',
    difficulty: 'Mudah',
    text: 'Manakah kegiatan di sekolah berikut yang menerapkan konsep perulangan (looping)? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Bel tanda masuk sekolah yang berdering 3 kali berturut-turut' },
      { id: 'B', text: 'Berlari mengelilingi lapangan upacara sebanyak 2 putaran' },
      { id: 'C', text: 'Menyanyikan lagu Indonesia Raya bersama-sama' },
      { id: 'D', text: 'Menuliskan nomor absen di lembar kertas ujian satu kali saja' },
    ],
    correctAnswer: ['A', 'B'],
    explanation: 'Bel berdering 3 kali dan berlari 2 putaran adalah aktivitas yang berulang (looping). Menulis nomor absen satu kali adalah aksi tunggal.',
  },
  {
    id: 24,
    type: 'pgk',
    topic: 'Pilar Berpikir Komputasional',
    difficulty: 'Mudah',
    text: 'Manakah di antara pilihan berikut yang termasuk ke dalam pilar berpikir komputasional? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Dekomposisi (memecah masalah besar menjadi tugas kecil)' },
      { id: 'B', text: 'Pengenalan Pola (melihat kesamaan atau keteraturan)' },
      { id: 'C', text: 'Perancangan Algoritma (menyusun urutan langkah penyelesaian)' },
      { id: 'D', text: 'Membeli mainan baru di pusat perbelanjaan' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Pilar berpikir komputasional terdiri dari Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma. Membeli mainan bukan pilar berpikir komputasional.',
  },
  {
    id: 25,
    type: 'pgk',
    topic: 'Perbandingan Logika Angka yang Benar',
    difficulty: 'Mudah',
    text: 'Manakah pernyataan perbandingan matematika berikut yang bernilai BENAR (TRUE)? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Angka 10 lebih besar dari angka 5 (10 > 5)' },
      { id: 'B', text: 'Angka 8 sama dengan angka 8 (8 = 8)' },
      { id: 'C', text: 'Angka 3 lebih kecil dari angka 7 (3 < 7)' },
      { id: 'D', text: 'Angka 2 lebih besar dari angka 9 (2 > 9)' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '10 > 5 adalah Benar, 8 = 8 adalah Benar, dan 3 < 7 adalah Benar. Sedangkan 2 > 9 adalah Salah.',
  },

  // =========================================================================
  // BAGIAN 3: PGK KATEGORI (5 BUTIR SOAL: NO. 26 - 30)
  // Seluruh soal berkategori: MUDAH untuk Siswa Kelas 6 SD
  // =========================================================================
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Dasar Logika dan Algoritma',
    difficulty: 'Mudah',
    text: 'Tentukan apakah setiap pernyataan di bawah ini BENAR atau SALAH tentang logika dan algoritma!',
    categoryLabels: {
      positive: 'Benar',
      negative: 'Salah',
    },
    statements: [
      {
        id: 's1',
        text: 'Algoritma adalah susunan langkah-langkah teratur untuk menyelesaikan suatu pekerjaan.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Komputer dapat berpikir sendiri tanpa ada petunjuk instruksi dari manusia.',
        correctAnswer: false, // Salah
      },
      {
        id: 's3',
        text: 'Urutan langkah yang terbalik dapat membuat hasil program menjadi salah atau gagal.',
        correctAnswer: true, // Benar
      },
    ],
    explanation: 'Pernyataan 1 Benar (definisi algoritma). Pernyataan 2 Salah (komputer memerlukan instruksi manusia). Pernyataan 3 Benar (urutan langkah harus teratur agar berhasil).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Simbol Bagan Alir (Flowchart)',
    difficulty: 'Mudah',
    text: 'Tentukan apakah pernyataan mengenai fungsi simbol bagan alir (flowchart) berikut SESUAI atau TIDAK SESUAI!',
    categoryLabels: {
      positive: 'Sesuai',
      negative: 'Tidak Sesuai',
    },
    statements: [
      {
        id: 's1',
        text: 'Simbol bangun oval digunakan untuk menandai langkah awal (Mulai) program.',
        correctAnswer: true, // Sesuai
      },
      {
        id: 's2',
        text: 'Garis bertanda panah digunakan untuk menunjukkan arah langkah selanjutnya.',
        correctAnswer: true, // Sesuai
      },
      {
        id: 's3',
        text: 'Simbol belah ketupat digunakan khusus untuk mencetak kertas pada printer.',
        correctAnswer: false, // Tidak Sesuai
      },
    ],
    explanation: 'Pernyataan 1 Sesuai (oval = Mulai/Selesai). Pernyataan 2 Sesuai (tanda panah = arah aliran). Pernyataan 3 Tidak Sesuai (belah ketupat = keputusan kondisi Ya/Tidak).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Penyelesaian Masalah dalam Koding',
    difficulty: 'Mudah',
    text: 'Tentukan apakah Anda SETUJU atau TIDAK SETUJU dengan pernyataan tentang memecahkan masalah koding berikut!',
    categoryLabels: {
      positive: 'Setuju',
      negative: 'Tidak Setuju',
    },
    statements: [
      {
        id: 's1',
        text: 'Membagi tugas kelompok yang besar menjadi bagian-bagian kecil membuat pekerjaan lebih mudah dan cepat selesai.',
        correctAnswer: true, // Setuju
      },
      {
        id: 's2',
        text: 'Jika ada kesalahan (bug) pada program koding, kita harus mencari letak kesalahannya dan memperbaikinya.',
        correctAnswer: true, // Setuju
      },
      {
        id: 's3',
        text: 'Kita bebas menyusun langkah koding secara acak tanpa perlu memikirkan urutan yang benar.',
        correctAnswer: false, // Tidak Setuju
      },
    ],
    explanation: 'Pernyataan 1 Setuju (penerapan dekomposisi). Pernyataan 2 Setuju (prinsip debugging). Pernyataan 3 Tidak Setuju (urutan langkah koding harus teratur dan terencana).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Konsep Percabangan dan Perulangan',
    difficulty: 'Mudah',
    text: 'Tentukan apakah setiap pernyataan logika berikut BENAR atau SALAH!',
    categoryLabels: {
      positive: 'Benar',
      negative: 'Salah',
    },
    statements: [
      {
        id: 's1',
        text: 'Perintah "Ulangi 3 kali: Lompat" akan membuat karakter animasi melompat sebanyak 3 kali.',
        correctAnswer: true, // Benar
      },
      {
        id: 's2',
        text: 'Kalimat "JIKA lapar MAKA makan" adalah contoh dari logika percabangan.',
        correctAnswer: true, // Benar
      },
      {
        id: 's3',
        text: 'Perulangan (looping) digunakan untuk mematikan komputer secara tiba-tiba.',
        correctAnswer: false, // Salah
      },
    ],
    explanation: 'Pernyataan 1 Benar (perulangan 3 kali). Pernyataan 2 Benar (struktur kondisi If-Then). Pernyataan 3 Salah (perulangan untuk mengulang instruksi, bukan mematikan komputer).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Aplikasi Koding Visual (Scratch)',
    difficulty: 'Mudah',
    text: 'Perhatikan pernyataan tentang aplikasi pemrograman visual Scratch berikut. Tentukan SESUAI atau TIDAK SESUAI!',
    categoryLabels: {
      positive: 'Sesuai',
      negative: 'Tidak Sesuai',
    },
    statements: [
      {
        id: 's1',
        text: 'Karakter atau tokoh dalam aplikasi Scratch disebut dengan istilah Sprite.',
        correctAnswer: true, // Sesuai
      },
      {
        id: 's2',
        text: 'Mengklik ikon bendera hijau berfungsi untuk memulai jalannya animasi program.',
        correctAnswer: true, // Sesuai
      },
      {
        id: 's3',
        text: 'Angka nilai skor dalam permainan game tidak akan pernah bisa bertambah saat dimainkan.',
        correctAnswer: false, // Tidak Sesuai
      },
    ],
    explanation: 'Pernyataan 1 Sesuai (tokoh/karakter = Sprite). Pernyataan 2 Sesuai (bendera hijau = tombol mulai). Pernyataan 3 Tidak Sesuai (variabel skor dapat bertambah nilainya saat pemain mendapat poin).',
  },

  // =========================================================================
  // BAGIAN 4: ISIAN SINGKAT (5 BUTIR SOAL: NO. 31 - 35)
  // Seluruh soal berkategori: MUDAH untuk Siswa Kelas 6 SD
  // =========================================================================
  {
    id: 31,
    type: 'isian',
    topic: 'Istilah Algoritma',
    difficulty: 'Mudah',
    text: 'Urutan langkah-langkah teratur dan logis untuk menyelesaikan suatu pekerjaan atau masalah disebut ....',
    correctAnswer: 'algoritma',
    acceptableAnswers: ['algoritma', 'algorithm'],
    explanation: 'Algoritma adalah serangkaian urutan langkah teratur dan logis untuk menyelesaikan pekerjaan atau masalah.',
  },
  {
    id: 32,
    type: 'isian',
    topic: 'Istilah Flowchart',
    difficulty: 'Mudah',
    text: 'Bagan atau diagram yang menggunakan gambar bangun datar untuk menunjukkan urutan alur jalannya program disebut ....',
    correctAnswer: 'flowchart',
    acceptableAnswers: ['flowchart', 'diagram alir', 'bagan alir'],
    explanation: 'Flowchart (bagan alir) adalah gambar atau diagram yang menggunakan simbol bangun datar untuk menggambarkan urutan langkah program.',
  },
  {
    id: 33,
    type: 'isian',
    topic: 'Istilah Bug',
    difficulty: 'Mudah',
    text: 'Kesalahan atau kekeliruan dalam kode program komputer yang menyebabkan program tidak berjalan semestinya disebut ....',
    correctAnswer: 'bug',
    acceptableAnswers: ['bug', 'error', 'kutu'],
    explanation: 'Bug adalah istilah umum dalam pemrograman untuk menyebut kesalahan atau masalah pada kode program.',
  },
  {
    id: 34,
    type: 'isian',
    topic: 'Simbol Terminator',
    difficulty: 'Mudah',
    text: 'Simbol bangun datar pada bagan alir (flowchart) yang berbentuk oval dan berfungsi untuk menandai Mulai dan Selesai disebut simbol ....',
    correctAnswer: 'terminator',
    acceptableAnswers: ['terminator', 'simbol terminator', 'oval'],
    explanation: 'Simbol berbentuk oval dinamakan Terminator, digunakan untuk menandai awal (Mulai) dan akhir (Selesai) alur program.',
  },
  {
    id: 35,
    type: 'isian',
    topic: 'Istilah Sprite',
    difficulty: 'Mudah',
    text: 'Karakter atau tokoh animasi (seperti gambar kucing) dalam pemrograman visual Scratch disebut ....',
    correctAnswer: 'sprite',
    acceptableAnswers: ['sprite', 'sprait'],
    explanation: 'Sprite adalah sebutan untuk objek, karakter, atau tokoh grafis yang dapat diprogram untuk bergerak dan bersuara dalam Scratch.',
  },
];
