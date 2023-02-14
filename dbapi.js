var mysql = require("mysql");

var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var app = express();
var fs = require("fs");
var cors = require("cors");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Restaurant",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


app.use(express.urlencoded({ extended: true }));
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

app.use(cors());
app.get("/", function (req, res) {
  console.log("hai default");
});

app.get("/selectAllMenu", function (req, res) {
    var sql = "SELECT * from Menu";
    con.query(sql, function (err, result) {
      if (err) throw err;
      //console.log("1 record inserted");
      console.log(result);
      res.end(JSON.stringify(result));
    });
  });

  var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
  });