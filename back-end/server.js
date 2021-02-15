const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
const index = require("./routes/index");
let sockets = [];
app.use(index)
app.use(cors())


io.on("connection", socket => {
  sockets.push(socket);
  console.log(`Client Connected, there is ${sockets.length} sockets connected`);

  socket.on('disconnect', () => {
    sockets = sockets.filter(s => s !== socket)
    console.log(`Client Disconnected, there are ${sockets.length} sockets remaining`);
  })
  socket.on('message', ({ name, message }) => {
    sockets.forEach(s => {
      s.emit('message', { name, message })
    })
    
  })
})


http.listen(8080, () => console.log("server is running on port 8080"));

/* 
  - Sockets are currently in an array. How could we change this?
  - Sockets will need to be in pairs of two, how will we identify each socket?
  - When a socket connects we will need to identify a socket by a name or some type of id such as a cookie.
  - How do we send messages to the person who posted the job?
    a) Send messages to a chat room where everyone sees
    b) The job poster will have some sort of view where they can view all inqueries for job which will essentially be chat threads. Each inquery will have a job id and a user id (enquiryId)

  - If there is an existing enquiry we will place that message to the existing mail box or create a new one if it is the first message.

  - Need ui for job seekers and and job creaters to look at all message threads

  - Maybe we should have a seperate database table for inqueries

  - Instead of pushing a socket connection by itself we will need to push a socket connection along with some data about the socket. Example (this socket will belong to user 8 which is inquiring about job 4)









*/