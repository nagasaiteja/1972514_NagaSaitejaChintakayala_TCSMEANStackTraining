const express = require('express')

const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000

const io = require('socket.io')(server)

const path = require('path')
app.use(express.static(path.join('C:/Users/WoW/OneDrive/Desktop/US/chatbot' + '/public')))

// just to test the server
io.on('connection', socket => {
  // console.log('Some client connected')
  
  socket.on('chat', message => {
  const output = message.split("/");
   console.log('Name From client: ', output[0]);
   console.log('Message From client: ', output[1]);
    //   io.emit('chat', message)

  })
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})