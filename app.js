// Requires for req/res
var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create Express App Object \\
var app = express();


// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res) {
    // Read/Write file sync
  res.sendFile('./public/html/seville.html', {root: './'})
})

app.get('/Seville', function(req, res) {
    // Read/Write file sync
  res.sendFile('./public/html/seville.html', {
    root: './'
  })
})

app.get('/CannaryIslands', function(req, res) {
    // Read/Write file sync
  res.sendFile('./public/html/cannaryIslands.html', {
    root: './'
  })
})

app.get('/CapeVerde', function(req, res) {
    // Read/Write file sync
  res.sendFile('./public/html/capeVerde.html', {
    root: './'
  })
})

app.get('/Guam', function(req, res) {
    // Read/Write file sync
  res.sendFile('./public/html/guam.html', {
    root: './'
  })
})

app.get('/Phillipines', function(req, res) {
    // Read/Write file sync
  res.sendFile('./public/html/phillipines.html', {
    root: './'
  })
})

app.get('/StraightofMagellan', function(req, res) {
    // Read/Write file sync
  res.sendFile('./public/html/straightOfMagellan.html', {
    root: './'
  })
})

app.get('/:badURL*', function(req, res) {
    // Read/Write file sync
  res.send('404 ' + req.params.badURL + ' Not Found')
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function() {
  console.log('Server running on port ' + port);

})
