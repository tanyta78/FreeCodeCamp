// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/whoami',function(req,res){
    var software = req.headers['user-agent'].split(' ');
    var data = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: software[1].slice(1)+" "+software[2]+" "+software[3].slice(0,-1)
    }
    res.json(data);
});
app.get('/*',function(req,res){
    var data = '//'+req.hostname+'/api/whoami'
    res.redirect(data);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
