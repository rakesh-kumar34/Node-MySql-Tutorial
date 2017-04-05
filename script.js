var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodetest'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});

var record= { firstname: 'Rakesh', lastname: 'Kumar', email: 'rakesh_kumar34@tamu.edu' };

dbconn.query('INSERT INTO users SET ?', record, function(err,res){
  if(err) throw err;

  console.log('Last record insert id:', res.insertId);
});

dbconn.end(function(err) {
  // Function to close database connection
});