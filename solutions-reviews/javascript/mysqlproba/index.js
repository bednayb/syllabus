var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'jaj',
  password: 'alma',
  database: 'bookstore'
});

connection.connect(function (error) {
  if (error) {
    console.log('JAAAJ', error);
  } else {
    console.log('SIKERULT');
  }
});

connection.query("SELECT * FROM book_mast;",function(err,rows){
  console.log("Data received from Db:\n");
  console.log(rows);
});

// connection.end();
