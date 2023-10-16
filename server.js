const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// ... (konfigurasi lainnya)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(__dirname + '/style.css');
});

const users = {}; // Objek untuk melacak pengguna dan room mereka

io.on('connection', (socket) => {
    console.log('User terhubung');
    socket.on('set user', (username) => {
        // Simpan nama pengguna dan socket.id dalam objek users
        users[socket.id] = { username, room: 'default' };

        // Gabungkan socket ke room default
        socket.join('default');

        // Kirimkan pesan selamat datang
        socket.emit('chat message', { sender: 'Server', message: `Selamat datang, ${username}!` });
    });

    socket.on('chat message', (message) => {
        const user = users[socket.id];
        if (user && user.room) {
            const messageToSend = { sender: user.username, message: message };
            io.to(user.room).emit('chat message', messageToSend);
        }
    });
    

    socket.on('disconnect', () => {
        // Hapus pengguna saat mereka keluar
        delete users[socket.id];
        console.log('User Terputus');
    });
});

server.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
