const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application");
const server = require("http").Server(app);
const express = require('express')()


const io = require('socket.io')(server);
const cors = require('cors');
const index = require("./routes/index");

let sockets = [];
express.use(index);
express.use(cors());

io.on("connection", socket => {
  sockets.push(socket);
  console.log(`Client Connected, there is ${sockets.length} sockets connected`);
  
  socket.on('disconnect', () => {
    sockets = sockets.filter(s => s !== socket);
    console.log(`Client Disconnected, there are ${sockets.length} sockets remaining`);
  });
  
  socket.on('message', ({ name, message }) => {
    sockets.forEach(s => {
      s.emit('message', { name, message });
    });
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});