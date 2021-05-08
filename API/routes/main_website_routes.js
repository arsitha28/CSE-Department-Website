var express=require('express');

var router=express.Router();
const app = express();
var bodyParser = require('body-parser');

app.use(express.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/workshop',function(req,res,next){
    
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM sys.workshop", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    
    });
  });
});

app.get('/research',function(req,res,next){
    
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "manager",
        database: "sys"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM sys.research", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.send(result);
        
        });
      });
    });

 app.post('/complaint', function (req, res) {
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
      var sql = "INSERT INTO sys.complaint VALUES (?)";
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
    

app.get('/research',function(req,res,next){
    
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "manager",
        database: "sys"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM sys.research", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          res.send(result);
        
        });
      });
    });

 app.post('/complaint', function (req, res) {
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
      var sql = "INSERT INTO sys.complaint VALUES (?)";
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

      app.get('/alumni',function(req,res,next){
    
        var mysql = require('mysql');
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "manager",
            database: "sys"
          });
          
          con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM sys.alumni", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
              res.send(result);
            
            });
          });
        });
    
        app.get('/announcement',function(req,res,next){
    
          var mysql = require('mysql');
          var con = mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "manager",
              database: "sys"
            });
            
            con.connect(function(err) {
              if (err) throw err;
              con.query("SELECT * FROM sys.announcement", function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                res.send(result);
              
              });
            });
          });
      



module.exports=app;

