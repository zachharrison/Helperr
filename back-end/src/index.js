const app = require("./application")('development');



// // Emit switch event on Socket.js with relevant rooms:
// export const switchRooms = (prevRoom, nextRoom) => {
//   if (socket) socket.emit('switch', { prevRoom, nextRoom });
// }
// // Consume switch event on server and make necessary room change:
// socket.on('switch', (data) => {
//   const { prevRoom, nextRoom } = data;
//   if (prevRoom) socket.leave(prevRoom);
//   if (nextRoom) socket.join(nextRoom);
//   socketRoom = nextRoom;
// });




// PUSH ALL SOCKET CONNECTIONS TO AN ARRAY
  // sockets.push(socket);
  // console.log(`Client Connected, there is ${sockets.length} sockets connected`);
  // console.log(socket.handshake.headers.cookie)

  // GET THE USER ID AND ROOM ID FROM THE COOKIES ON FRONT END
//   let currentUser = socket.handshake.headers.cookie.split(" ")[0];
//   let currentRoom = socket.handshake.headers.cookie.split(" ")[1];

//   socket.on('joinRoom', ({ user, room }) => {
//     const user = userJoin(currentUser, currentRoom);
//     socket.join(user.roomId);

//     // SEND USERS AND ROOM INFO
//     io.to(user.roomId).emit('roomUsers', {
//       room: user.roomId,
//       users: getRoomUsers(user.roomId)
//     });

//     // LISTEN FOR CHAT MESSAGE
//     socket.on('chatMessage', ({ currentUser, message} ) => {
//       const user = getCurrentUser(currentUser);
//       console.log(`msg: ${message}, from user: ${currentUser} to room: ${room}`);
//       io.to(user.roomId).emit('message', { currentUser, message });
//     });
//   });
// });
  // socket.on('connectToRoom', room => {

  // })
  // io.to(currentRoom).emit('connectToRoom', `You are connected to room ${currentRoom}`);

  // console.log("CURRENTROOM", currentRoom)

  // WILL NEED TO SET USERNAME TO THE VALUE OF THE COOKIE

  //  --------------> //   socket.on("set username", (username) => {
                        //     socket.username = username;
                        //   });
                        // });

  // socket.on('disconnect', () => {
  //   sockets = sockets.filter(s => s !== socket);
  //   console.log(`Client Disconnected, there are ${sockets.length} sockets remaining`);
  // });
//   // SENDS MESSAGE CLIENT SIDE
//   socket.on('message', ({ name, message }) => {
//     // EMIT MESSAGE TO CORRECT ROOM
//     sockets.forEach(s => {
//       s.emit('message', { name, message });
//     });
//   });
// });

// io.in("game").emit("big-announcement", "the game will start soon");

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

// **** HANDSHAKE DETAILS ****
// {
//   headers: /* the headers sent as part of the handshake */,
//   time: /* the date of creation (as string) */,
//   address: /* the ip of the client */,
//   xdomain: /* whether the connection is cross-domain */,
//   secure: /* whether the connection is secure */,
//   issued: /* the date of creation (as unix timestamp) */,
//   url: /* the request URL string */,
//   query: /* the query params of the first request */,
//   auth: /* the authentication payload */
// }

// io.use((socket, next) => {
//   let handshake = socket.handshake;
//   // ...
// });

// io.on('connection', (socket) => {
//   let handshake = socket.handshake;
//   // ...
// });
