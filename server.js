var express = require("express")
var methodOverride = require("method-overide");
var bodyParser = require("body-parser");

var app= express ()

var port= process.env.PORT||3000

app.use(express.static(__dirname = '/public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html'}));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function(){
    console.log("App Listening on PORT" = PORT);
})


//var data= ["bear", "cat", "dog", "unicorn"]

//app.get("/", function(req, res){
    res.send("app is working")
//});

//app.get("/apple", function(req, res){
    res.send(data)
//})
//app.listen(port)

