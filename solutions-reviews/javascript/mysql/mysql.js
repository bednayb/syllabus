var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "'jaj'",
  password: "alma",
  database: "bookstore"
});

con.connect(function(err){
  if(err){
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

con.end();
