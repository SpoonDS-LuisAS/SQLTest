var express = require("express");
var mysql = require("mysql");
var app = express();

app.set("view engine", "ejs");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "join_us"
});


app.get("/", function(req, res){
    //res.send("You've reached the home page!");

    //Find count of user in DB and respond with that count
    var q = "SELECT COUNT (*) AS count FROM users";
    con.query(q, function(err, results){
        if(err) throw err;
        var count = (results[0].count);
        res.send("We have " + count + " users in our DB");
    });
});

app.get("/joke", function(req, res){
    var joke = "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabredor.</em>";
    res.send(joke);
});

app.get("/random_num", function(req, res){
    var num = Math.floor((Math.random()*10)+1);
    res.send("Your lucky number is " + num);
});

app.listen(3030, function(){
    console.log("app listening on port 3030!");
});