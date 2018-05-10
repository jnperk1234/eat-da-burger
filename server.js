var express = require("express")
var app= express ()

var port= process.env.PORT||3000

var data= ["bear", "cat", "dog", "unicorn"]

app.get("/", function(req, res){
    res.send("app is working")
});

app.get("/apple", function(req, res){
    res.send(data)
})
app.listen(port)

