const express = require("express");

const app = express();
var bodyParser = require('body-parser');

app.use(express.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/workshop', function (req, res) {
    var result= req.body.post;

    for( var i=0;i< 5; i++){
        console.log(result[i]);
    }

    
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys"
  });
  con.connect(function(err) {
   
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO sys.workshop VALUES (?)";
  var values = [
    result[0], 
    result[1], 
    result[2],
    result[3], 
    result[4] 
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    res.sendFile(__dirname + "/index.html");
  });
   // res.send("API working");
});


  });

  app.post('/research', function (req, res) {
    var result= req.body.post;

    for( var i=0;i< 5; i++){
        console.log(result[i]);
    }

    
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys"
  });
  con.connect(function(err) {
   
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO sys.research VALUES (?)";
  var values = [
    result[0], 
    result[1], 
    result[2],
    result[3]
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    res.sendFile(__dirname + "/index.html");
  });
   // res.send("API working");
});


  });


module.exports=app;