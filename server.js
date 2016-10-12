
var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    port = process.env.PORT || 5000;


//---------App Routes and Auth----------// 

app.use(express.static('client'));


app.get('/', function (req, res) {
    
    console.log('request from home page');
    res.sendFile('./client/index.html');

});


//-------------Server listen-------------//

server.listen(port, function() {

    console.log('Server waiting for connections in env port');
});

