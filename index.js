var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

var things = require('./things.js'); 

app.use('/things', function(req, res, next){
	console.log("A request for things received at " + Date.now());
	next();
});

app.use(function(req, res, next){
	console.log("Start");
	next();
});
//Route handler
app.get('/', function(req, res, next){
	res.send("Middle");
	next();
});

app.use('/', function(req, res){
	console.log('End');
});

//both index.js and things.js should be in same directory
app.use('/things', things); 


app.listen(process.env.PORT || 3000)

