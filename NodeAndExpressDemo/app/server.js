'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const fccTesting    = require('./freeCodeCamp/fcctesting.js');
const mongo         = require('mongodb').MongoClient;
const session     = require('express-session');
const routes        = require('./Routes.js');
const auth          = require('./Auth.js');

const app = express();

fccTesting(app); //For FCC testing purposes

app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

if (process.env.ENABLE_DEBUGGING == 'true') {
  let count = 0;
  app.use((req, res, next) => {
    count++;
    let str = count + ' ' + req.method + ' ' + req.url;
    console.log('\nNew request:\n' + str);
    console.log(req.body);
    res.on('finish', () => console.log('\nRequest ended:\n' + str));
    next();
  });
}

// Enable to pass the challenge called "Advanced Node and Express - 
// Registration of New Users"
if (process.env.ENABLE_DELAYS) app.use((req, res, next) => {
  switch (req.method) {
    case 'GET':
      switch (req.url) {
        case '/logout': return setTimeout(() => next(), 500);
        case '/profile': return setTimeout(() => next(), 700);
        default: next();
      }
    break;
    case 'POST':
      switch (req.url) {
        case '/login': return setTimeout(() => next(), 900);
        default: next();
      }
    break;
    default: next();
  }
});

mongo.connect(process.env.DATABASE, (err, connection) => {
  if (err) console.log('Database error: ' + err);
  else {
    console.log('Successful database connection');
    const db = connection.db();
  
    auth(app,db);
    
    routes(app,db);
  
    app.listen(process.env.PORT || 3000, () => {
        console.log("Listening on port " + process.env.PORT);
      });
}});

