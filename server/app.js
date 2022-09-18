const express = require('express')
const PORT = 3001


const app = express()

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employees',
  password:'jcU96mo'
});

// execute will internally call prepare and query
connection.execute(
    'SELECT * FROM employee_table', 
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
    })

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})