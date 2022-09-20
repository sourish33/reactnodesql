const express = require("express")
const cors = require('cors')
const PORT = 3001

const app = express()
app.use(cors())

// get the client
const mysql = require("mysql2/promise")

/*
check out https://evertpot.com/executing-a-mysql-query-in-nodejs/

*/
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "employees",
  password: "jcU96mo",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit:0
})

app.get("/", (req, res)=>{
  res.json("Hello from the other side!")
})

app.get("/users", async (req, res) => {
  const q = "SELECT * FROM employee_table"
  try {
    const [result, field] = await pool.query(q)
      return res.status(200).json(result)
  } catch (error) {
      return res.status(404).json(error)
  }
  
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
