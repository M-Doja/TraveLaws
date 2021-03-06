var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var passport = require('passport');
var mongoose = require('mongoose');
require('./models/BlogModel');
require('./models/UserModel');
require('./models/ProfileModel');
require('./config/passport');
mongoose.connect('mongodb://localhost/TraveLaw');
// mongoose.connect(process.env.MONGO_STRING);


app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
var BlogRoute = require('./routes/BlogRouter');
var UserRoute = require('./routes/UserRouter');
var ProfileRoute = require('./routes/ProfileRouter');


//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

app.use('/api/blog', BlogRoute);
app.use('/api/user', UserRoute);
app.use('/api/profile', ProfileRoute);


var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});
