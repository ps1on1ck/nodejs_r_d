const io = require("socket.io-client");
const socket = io("http://localhost:3000");

// client-side
socket.on("connect", () => {
    socket.emit('chat message', 'Hello from node.js client');
    socket.on('chat message', (message) => {
        console.log('Received: ', message);
    });
});

socket.on("disconnect", () => {
    console.log('client disconnected');
});
