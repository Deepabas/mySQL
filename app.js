const express = require('express');
const mysql = require('mysql')
const app = express()
const port = 5000;
require('dotenv').config();
const authRoute = require('./src/components/userController/userRoute')


app.use(express.urlencoded({ extended: true })); // New

app.use(express.json()); // New

//route middlewares
app.use('/', authRoute)

// app.post('/',(req,res)=>{
//     console.log(req.body)
// })

// Listen on environment port
app.listen(port, () => console.log(`Listening on port ${port}`))