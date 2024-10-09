# Hotel Reservation System Backend

<!-- ## Deskripsi Proyek
Proyek ini adalah backend untuk sistem reservasi hotel. Sistem ini mengelola data hotel, kamar, pelanggan, reservasi, dan pembayaran. Dibangun menggunakan Node.js dengan framework Express.js dan ORM Sequelize untuk manajemen database. -->

## Struktur Database
Sistem ini menggunakan database relasional dengan struktur tabel sebagai berikut:

1. **Hotel**: Menyimpan informasi tentang hotel.
2. **Kamar**: Detil kamar yang tersedia di setiap hotel.
3. **Costumer**: Data pelanggan yang melakukan reservasi.
4. **Reservasi**: Informasi reservasi kamar oleh pelanggan.
5. **Pembayaran**: Detil pembayaran untuk setiap reservasi.

## Fitur Utama
- Manajemen data hotel dan kamar
- Sistem reservasi kamar
- Pengelolaan data pelanggan
- Proses pembayaran reservasi
- API untuk integrasi dengan frontend

## Penjelasan Relasi
- Setiap Hotel dapat memiliki banyak Kamar.
- Setiap Kamar hanya milik satu Hotel.
- Seorang Costumer dapat membuat banyak Reservasi.
- Setiap Reservasi terkait dengan satu Kamar dan satu Costumer.
- Setiap Reservasi memiliki satu Pembayaran.


<!-- ## Teknologi yang Digunakan
- Node.js
- Express.js
- Sequelize ORM
- MySQL Database -->

<!-- ## Instalasi dan Penggunaan
1. Clone repositori ini
2. Jalankan `npm install` untuk menginstal dependensi
3. Konfigurasi database di file `config/database.js`
4. Jalankan migrasi database dengan `npx sequelize-cli db:migrate`
5. Mulai server dengan `npm start` -->

<!-- ## API Endpoints
- `GET /api/hotels`: Mendapatkan daftar hotel
- `POST /api/reservations`: Membuat reservasi baru
- `GET /api/customers/:id`: Mendapatkan informasi pelanggan
- (Tambahkan endpoint lainnya sesuai kebutuhan) -->

<!-- ## Kontribusi
Kontribusi untuk pengembangan proyek ini sangat diterima. Silakan buat pull request atau laporkan issues jika menemukan bug atau memiliki saran perbaikan. -->

<!-- ## Lisensi
[Tambahkan informasi lisensi jika ada] -->
