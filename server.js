var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');


// Configure express
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.use(session({secret: 'SuperSecret'}));

// mongoose connection
mongoose.connect('mongodb://localhost/pawndr');
require('./server/config/mongoose.js');

// load routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// server listen
app.listen(8000, function(){
	console.log('on port 8000');
})

app.all("*", (req,res,next) => {
	res.sendFile(path.resolve("./public/dist/index.html"))
  });