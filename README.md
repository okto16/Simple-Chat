# Introduction

Node.js: Sebuah lingkungan JavaScript di sisi server yang memungkinkan Anda untuk menjalankan kode JavaScript di sisi server.
Socket.io: Library yang digunakan untuk mengimplementasikan komunikasi real-time antara server dan klien. Ini memungkinkan server dan klien untuk mengirim dan menerima pesan secara asinkron.

## Fitur Utama:
Pengguna dapat masuk: Pengguna dapat memasukkan nama pengguna mereka sebelum bergabung ke dalam chat room.
Pengiriman Pesan: Pengguna dapat mengirim pesan teks ke semua pengguna lain yang ada dalam chat room yang sama.
Penerimaan Pesan: Pengguna dapat menerima pesan yang dikirim oleh pengguna lain secara real-time.
Pesan Selamat Datang: Pengguna menerima pesan selamat datang ketika mereka bergabung ke dalam ruangan chat.

## Quick demo
![image](https://github.com/okto16/Simple-Chat/assets/95692091/f5572deb-e292-4083-8f25-fed0d062f284)

## Running this project
Untuk menjalankan proyek chat sederhana berbasis JavaScript, Anda perlu mengikuti beberapa langkah dasar. Dalam contoh ini, saya akan menggunakan Node.js dan Socket.io untuk membuat aplikasi chat. Berikut langkah-langkahnya:

1. **Persiapan Lingkungan**:
   - Pastikan Anda telah menginstal Node.js di komputer Anda. Jika belum, Anda dapat mengunduhnya dari [situs web resmi Node.js](https://nodejs.org/).

2. **Buat Direktori Proyek**:
   - Buat direktori baru untuk proyek chat Anda, dan masuk ke dalamnya melalui terminal.

3. **Inisialisasi Proyek Node.js**:
   - Gunakan perintah berikut di terminal untuk menginisialisasi proyek Node.js:

     ```bash
     npm init
     ```

   - Ikuti petunjuk untuk mengonfigurasi proyek Anda. Anda dapat memasukkan nilai default untuk sebagian besar opsi jika Anda tidak yakin.

4. **Instalasi Dependencies**:
   - Anda perlu menginstal beberapa dependensi seperti `express` dan `socket.io`. Gunakan perintah berikut untuk menginstalnya:

     ```bash
     npm install express socket.io
     ```

5. **Buat File Server**:
   - Buat file server Node.js (misalnya, `server.js`) dalam direktori proyek Anda. Ini akan menjadi tempat Anda akan mengatur server chat.

6. **Kode Server Node.js**:
   - Di dalam file `server.js`, tambahkan kode berikut:

     ```javascript
     const express = require('express');
     const http = require('http');
     const socketIo = require('socket.io');

     const app = express();
     const server = http.createServer(app);
     const io = socketIo(server);

     app.get('/', (req, res) => {
         res.sendFile(__dirname + '/index.html');
     });

     io.on('connection', (socket) => {
         console.log('Sebuah pengguna terhubung');

         // Handle events like chat messages here

         socket.on('disconnect', () => {
             console.log('Sebuah pengguna terputus');
         });
     });

     server.listen(3000, () => {
         console.log('Server chat berjalan di port 3000');
     });
     ```

   - Di sini, kita menggunakan Express untuk mengatur server HTTP, dan Socket.io untuk mengelola koneksi real-time.

7. **Buat File HTML**:
   - Buat file HTML (misalnya, `index.html`) dalam direktori proyek Anda. File ini akan digunakan sebagai antarmuka pengguna chat.

8. **Kode HTML**:
   - Di dalam file `index.html`, tambahkan kode HTML dasar untuk tampilan chat:

     ```html
     <!DOCTYPE html>
     <html>
     <head>
         <title>Aplikasi Chat Sederhana</title>
     </head>
     <body>
         <h1>Aplikasi Chat Sederhana</h1>
     </body>
     </html>
     ```

   - Anda dapat mengatur tampilan dan elemen-elemen chat sesuai dengan preferensi Anda.

9. **Mulai Server Chat**:
   - Kembali ke terminal dan jalankan server chat dengan perintah:

     ```bash
     node server.js
     ```

   - Server chat Anda akan berjalan di `http://localhost:3000` (atau sesuai dengan port yang Anda atur).

10. **Akses Aplikasi Chat**:
    - Buka peramban web Anda dan akses `http://localhost:3000` (atau sesuai dengan alamat server yang Anda gunakan).

11. **Pengembangan Lebih Lanjut**:
    - Selanjutnya, Anda dapat mengembangkan aplikasi chat ini dengan menambahkan fitur-fitur seperti pengiriman pesan, daftar pengguna online, dan sebagainya dengan JavaScript di sisi klien (HTML).
