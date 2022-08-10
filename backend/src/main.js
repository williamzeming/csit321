// import mysql from './mysql';
const express = require('express')
const cors = require('cors')
const mysql = require("./mysql");
const {response} = require("express");
var bodyParser = require('body-parser')
const app = express()
const port = 5000
const router = require('./router')
app.engine('html',require('express-art-template'))
app.use(router)



var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
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
        age:18,
        email:mysql.dbConnect1()
    })
})
app.get('/test1', (req, res) => {
    mysql.dbConnect1()
    .then(res1 =>{
            // console.log(res1)
        res.status(200).json({
            name:'william',
            age:18,
            phone:18287888888,
            email:res1
        })
    })
    .catch(err =>{
        console.log(err)
    })
    // console.log(mysql.dbConnect1())
})
app.post('/test',jsonParser, (req, res) => {
    console.log(req.body.email)
    mysql.dbConnect1(req.body.email)
        .then(res1 =>{
            console.log(res1.userNum)
            console.log(req.body.pw)
            if (res1.password === req.body.pw){
                res.status(200).json({
                    userNum:res1.userNum
                })
            } else {
                res.status(403).json({
                    error:"password error"
                })
            }
            // res.status(200).json({
            //     password:res1
            // })
        })
        .catch(err =>{
            console.log(err)
        })
})
//最后
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})