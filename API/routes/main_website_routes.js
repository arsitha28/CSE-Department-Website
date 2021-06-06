var express = require("express");

var router = express.Router();
const app = express();
var bodyParser = require("body-parser");

app.use(express.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/workshop_year1", function (req, res, next) {
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });

  var sql = "SELECT * FROM sys.workshop where YEAR(from_date) = ?";

  var value = [2021];

  con.connect(function (err) {
    if (err) throw err;
    con.query(sql, [value], function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

app.get("/workshop_year2", function (req, res, next) {
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });

  var sql = "SELECT * FROM sys.workshop where YEAR(from_date) =?";

  var value = [2020];

  con.connect(function (err) {
    if (err) throw err;
    con.query(sql, [value], function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

app.get("/workshop_year3", function (req, res, next) {
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });

  var sql = "SELECT * FROM sys.workshop where YEAR(from_date)=?";

  var value = [2019];

  con.connect(function (err) {
    if (err) throw err;
    con.query(sql, [value], function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

app.get("/research_year1", function (req, res, next) {
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });

  var sql = "SELECT * FROM sys.research where year=(?)";

  var value = [2021];

  con.connect(function (err) {
    if (err) throw err;
    con.query(sql, [value], function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

app.get("/research_year2", function (req, res, next) {
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });

  var sql = "SELECT * FROM sys.research where year=(?)";

  var value = [2020];

  con.connect(function (err) {
    if (err) throw err;
    con.query(sql, [value], function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

app.get("/research_year3", function (req, res, next) {
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });

  var sql = "SELECT * FROM sys.research where year=(?)";

  var value = [2019];

  con.connect(function (err) {
    if (err) throw err;
    con.query(sql, [value], function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

app.post("/complaint", function (req, res) {
  var result = req.body.post;

  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO sys.complaint VALUES (?)";
    var values = [result[0], result[1], result[2], result[3]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
      res.sendFile(__dirname + "/index.html");
    });
  });
});

app.post("/complaint", function (req, res) {
  var result = req.body.post;

  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO sys.complaint VALUES (?)";
    var values = [result[0], result[1], result[2], result[3]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
      res.sendFile(__dirname + "/index.html");
    });
  });
});

app.get("/alumni", function (req, res, next) {
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });

  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM sys.alumni", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

app.get("/announcement", function (req, res, next) {
  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sys",
  });

  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT announcementValue FROM sys.announcement order by date desc",
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      }
    );
  });
});

module.exports = app;
