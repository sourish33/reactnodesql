const express = require("express")
const cors = require('cors')
const PORT = 3001

const app = express()
app.use(cors())
app.use(express.json())//required to make sure the stringified data comes through

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

app.post("/user", async (req, res) =>{
  const {fname, lname, age, job_title, salary} = req.body
  // const data = `${fname} ${lname}, aged ${age} works as ${job_title} and makes $${salary}/year`
  // console.log(data)
  //INSERT INTO `employees`.`employee_table` (`fname`, `lname`, `age`, `job_title`, `salary`) VALUES ('Danny', 'Bonaduce', '89', 'Actor', '23466')
  const q = 'INSERT INTO `employees`.`employee_table` (`fname`, `lname`, `age`, `job_title`, `salary`) VALUES (?, ?, ?, ?, ?)'
  try {
    const [result, field] = await pool.query(q, [fname, lname, age, job_title, salary])
      console.log(result)
      return res.status(200)
  } catch (error) {
      console.log("error:", error)
      return res.status(404)
  }

})



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

/*


  /**
   * This is returned when update was successful
   * {
   *   "fieldCount": 0,
   *   "affectedRows": 1,
   *   "insertId": 0,
   *   "serverStatus": 2,
   *   "warningCount": 0,
   *   "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
   *   "protocol41": true,
   *   "changedRows": 1
   * }
   */

   /**
    * This is returned when no matching rows are found
    * {
    *  "fieldCount": 0,
    *  "affectedRows": 0,
    *  "insertId": 0,
    *  "serverStatus": 2,
    *  "warningCount": 0,
    *  "message": "(Rows matched: 0  Changed: 0  Warnings: 0",
    *  "protocol41": true,
    *  "changedRows": 0
    * }
*/

