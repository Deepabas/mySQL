const express = require('express');

const mysql = require('mysql')

const app = express()
const port = 5000;


app.use(express.urlencoded({ extended: true })); // New

app.use(express.json()); // New

// MySQL Code goes here

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: null,
    database: "deepa"

})

pool.getConnection((err, connection) => {
    if (err) throw err
    console.log("connected")
})

// Listen on environment port
app.listen(port, () => console.log(`Listening on port ${port}`))