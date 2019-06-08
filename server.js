require('dotenv').config('');
var express = require('express');
//var createError = require('http-errors');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var env = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(config.port);
console.log("Server running on port: " + config.port);