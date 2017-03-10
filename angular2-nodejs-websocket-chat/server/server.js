const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const app = express();

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// point static path to the angular2 dist folder created by `ng build`
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/test', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.end(JSON.stringify({data: 'This is a test response from the node server.'}));
});

// catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// });

var io = socketio(server);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

server.listen(port, () => console.log(`Running on localhost:${port}`));