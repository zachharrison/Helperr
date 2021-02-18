const PORT = process.env.PORT || 8001;
const ENV = require("./environment");
const app = require("./application")("development");
const server = require("http").Server(app);
const express = require("express")();
const io = require("socket.io")(server);
let sockets = [];
express.use(app);

io.on("connection", (socket) => {
  sockets.push(socket);
  console.log(`Client Connected, there is ${sockets.length} sockets connected`);

  socket.on("disconnect", () => {
    sockets = sockets.filter((s) => s !== socket);
    console.log(
      `Client Disconnected, there are ${sockets.length} sockets remaining`
    );
  });

  socket.on("message", ({ name, message }) => {
    sockets.forEach((s) => {
      s.emit("message", { name, message });
    });
  });
});

server.listen(8001, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});

// TRAVERSY MEDIA PROJECT EXAMPLE
// https://github.com/bradtraversy/chatcord/blob/master/public/js/main.js

// create a function that when clicking on messages will query db/state whatever our situation is and then return the ones for that user based on cookie
// state should have the messages so should hopefully be able to hve them show up depending how they come out of DB

// when clicking on a chat will hhave to do
// io.on('connection', socket => {
//   socket.join('CHATID');
// });

// will have to use this below but to a specific socket maybe?
// io.to('CHATID').emit('some event');

// will this work if the other person is not in the connection? HOPE SO

// // sending to all clients in "game1" and/or in "game2" room, except sender
// socket.to("game1").to("game2").emit("nice game", "let's play a game (too)");

// // sending to all clients in "game" room, including sender
// io.in("game").emit("big-announcement", "the game will start soon");

// if we are sending a message to someone that is not currently connected,
// is this still a socket connection or is it just posting to the DB and updating state instead?
