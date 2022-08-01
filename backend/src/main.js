// import mysql from './mysql';
const express = require('express')
const cors = require('cors')
const mysql = require("./mysql");
const {response} = require("express");
const app = express()
const port = 5000

//最前
app.use(cors()) // Use this after the variable declaration


app.get('/Login', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    console.log('12311')
    console.log(req.query.ID)
    res.status(200).json({
        name:'william',
        age:18
    })
})
app.post('/test', (req, res) => {
    console.log('12311')
    console.log(req.status)
    res.status(200).json({
        name:'william',
        age:18
    })
})
mysql.dbConnect();

//最后
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})