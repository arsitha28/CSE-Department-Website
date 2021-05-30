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

app.get('/complaint',function(req,res,next){
    
  var mysql = require('mysql');
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "manager",
      database: "sys"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM sys.complaint", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      
      });
    });
  });



  app.post('/report_certificate', function (req, res) {
    var result= req.body.post;

    var mysql = require('mysql');
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "manager",
      database: "sys"
    });

    var sql="SELECT * FROM sys.report where certificate like (?)";

    var value=[result[0]];

    con.connect(function(err) {
      if (err) throw err;
      con.query(sql,[value] ,function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
    });


  });

  app.post('/report_workshop', function (req, res) {
    var result= req.body.post;

    var mysql = require('mysql');
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "manager",
      database: "sys"
    });

    var sql="SELECT * FROM sys.workshop where YEAR(from_date)=?";

    var value=[result[0]];

    con.connect(function(err) {
      if (err) throw err;
      con.query(sql,[value] ,function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
    });


  });

  app.post('/report_research', function (req, res) {
    var result= req.body.post;

    var mysql = require('mysql');
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "manager",
      database: "sys"
    });

    var sql="SELECT * FROM sys.research where year=?";

    var value=[result[0]];

    con.connect(function(err) {
      if (err) throw err;
      con.query(sql,[value] ,function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
    });


  });
  
  
  app.post('/alumni', function (req, res) {
    var result= req.body.post;

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
  var sql = "INSERT INTO sys.alumni VALUES (?)";
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

app.post('/announcement', function (req, res) {
  var result= req.body.post;
  var datetime = new Date();
    
  var date= datetime.getFullYear()+"-"+datetime.getMonth()+"-"+datetime.getDate()+" "+datetime.getHours()+":"+datetime.getMinutes()+":"+datetime.getSeconds();
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
var sql = "INSERT INTO sys.announcement VALUES (?)";
var values = [
 
  result[0],
  date
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