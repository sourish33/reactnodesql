const express = require("express")
const PORT = 3001

const app = express()

// get the client
const mysql = require("mysql2/promise")

// get the promise implementation, we will use bluebird
// const bluebird = require("bluebird")

app.get("/users", async (req, res) => {
    try {
        // create the connection to database
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "employees",
            password: "jcU96mo",
        })

        const [rows, fields] = await connection.execute(
            "SELECT * FROM employee_table"
        )
        return res.status(200).json(rows)
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
