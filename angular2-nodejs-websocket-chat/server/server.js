const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const _ = require('lodash');

const app = express();

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// point static path to the angular2 dist folder created by `ng build`
app.use(express.static(path.join(__dirname, '../dist')));

//catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

var io = socketio(server);

var users = [];

io.on('connection', function(socket){
  console.log(`User connected with the socket id '${socket.id}'.`);
  users.push({ id: socket.id, username: 'unknown' });

  socket.on('disconnect', function(){
    console.log(`User disconnected with the socket id '${socket.id}'.`);
    users = _.filter(users, (user) => { return user.id !== socket.id; });
    io.emit('users', users);
  });

  socket.on('join', (username) => {
    console.log(`Join message received from the socket id '${socket.id}' with the username '${username}'.`);
    user = _.find(users, { id: socket.id });
    user.username = username;
    io.emit('users', users); 
    console.dir(users);
  });

  socket.on('message', (message) => {
    console.log(`Message received from the socket id '${socket.id}'.`);
    io.emit('message', message); 
    console.dir(message);
  });
});

server.listen(port, () => console.log(`Running on localhost:${port}`));