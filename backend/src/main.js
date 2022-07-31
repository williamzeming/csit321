// import mysql from './mysql';
const express = require('express')
const cors = require('cors')
var mysql = require("./mysql");
const app = express()
const port = 5000

//最前
app.use(cors()) // Use this after the variable declaration


app.get('/Register', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {

    res.status(200).json({
        name:'william',
        age:18
    })
})
mysql.dbConnect();

//最后
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })