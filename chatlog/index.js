const express = require('express')

const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000

const io = require('socket.io')(server)

const path = require('path')
app.use(express.static(path.join('C:/Users/WoW/OneDrive/Desktop/US/chatbot' + '/public')))

var MongoClient = require('mongodb').MongoClient;
var url = "27017/mongodb://localhost:";

// just to test the server
io.on('connection', socket => {
  // console.log('Some client connected')
  
  socket.on('chat', message => {
  const output = message.split("/");
   console.log('Name From client: ', output[0]);
   console.log('Message From client: ', output[1]);
   MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: output[0] , message: output[1] };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
    //   io.emit('chat', message)

  })
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})