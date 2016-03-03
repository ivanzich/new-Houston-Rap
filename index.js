//Dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Configurations
mongoose.connect("mongodb://localhost/artists");
process.on('exit', function() { mongoose.disconnect()}); //Shutdown mongoose correctly
app.set('view engine', 'hbs'); //sets view engine to handle bars
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method')); //allow put/delete request in html form
app.use(express.static(__dirname + '/public')); //looks for assets like stylesheets in a 'public' folder
var port = 3000;

//Routes
var routes = require('./config/routes');
app.use(routes);


app.listen(port, function() {
  console.log("Listening on port: " + port);
})
