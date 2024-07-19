var mysql = require('mysql');

var con = mysql.createConnection({
  host: "195.28.168.107:3306",
  user: "salekani_test",
  password: "@1381Itjl",
  database:"salekani_test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});