const express = require('express')
const cors = require('cors')
const mysql = require("./mysql");
const {response} = require("express");
var bodyParser = require('body-parser')
const fs = require("fs");
const app = express()
const port = 5000


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})
//最前
app.use(cors()) // Use this after the variable declaration


app.get('/Login', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    console.log('12311')
    console.log(req.query.ID)
    res.status(200).json({
        name: 'william',
        age: 18,
        email: mysql.loginSelectByEmail()
    })
})
app.get('/test1', (req, res) => {
    mysql.loginSelectByEmail()
        .then(res1 => {
            // console.log(res1)
            res.status(200).json({
                name: 'william',
                age: 18,
                phone: 18287888888,
                email: res1
            })
        })
        .catch(err => {
            console.log(err)
        })
    // console.log(mysql.dbConnect1())
})


app.post('/login', jsonParser, (req, res) => {
    // console.log(req.body.email)
    mysql.loginSelectByEmail(req.body.email)
        .then(res1 => {
            console.log(res1.userNum)
            console.log(res1.password)
            console.log(res1.firstName)
            //statusCode 1: success, 0: error
            if (res1.password === req.body.pw) {
                res.status(200).json({
                    fname: res1.firstName,
                    uid: res1.userNum,
                    statusCode: 1
                })
                console.log(res1)
            } else {
                res.status(200).json({
                    uid: res1.userNum,
                    statusCode: 0
                })
                console.log("error")
            }
        })
        .catch(err => {
            console.log(err)
        })
})

app.post('/register', jsonParser, (req, res) => {
    mysql.registerInsert(req.body.lastName, req.body.firstName, req.body.firstPd, req.body.birth, req.body.email, req.body.phoneNumber, req.body.gender).then(res1 => {
        console.log(res1)
        res.status(200).json({
            error: res1
        })
    })
})
// url: /initHomePost
// method: post
// params: uid
app.post('/initHomePost', jsonParser, (req, res) => {
    console.log(req.body.uid)
    mysql.popularSelect().then(res1 => {
        res.status(200).json({
            res1
        })
        console.log(res1)
    })
})

// url: /searchMountains
// method: post
// params: loc
app.post('/searchMountains', jsonParser, (req, res) => {
    console.log(req.body.loc)
    mysql.searchMountains(req.body.loc).then(res1 => {
        res.status(200).json({
            res1
        })
        console.log(res1)
    })
})

// url: /initDetailPost
// method: post
// params: loc
app.post('/initDetailPost', jsonParser, (req, res) => {
    console.log(req.body.loc)
    res.status(200).json({
        lat:-34.42036296539061,
        lng:150.8968482112078
    })
})
// url: /mountainDetailOnload
// method: post
// params: loc
app.post('/mountainDetailOnload', jsonParser, (req, res) => {
    console.log(req.body.loc)
    mysql.selectMountainDetailOnload(req.body.loc).then(res1 => {
        res.status(200).json({
            res1
        })
        console.log(res1)
    })
})
// url: /commentDetailOnload
// method: post
// params: loc
app.post('/commentDetailOnload', jsonParser, (req, res) => {
    console.log(req.body.loc)
    mysql.selectCommentDetailOnload(req.body.loc).then(res1 => {
        res.status(200).json({
            res1

        })
        console.log(res1)
    })
})
// url: /getWeatherInfo
// method: post
// params: loc
app.post('/getWeatherInfo', jsonParser, (req, res) => {
    console.log(req.body.loc)
    mysql.selectWeather(req.body.loc).then(res1 => {
        const fs = require('fs');
        const data = fs.readFileSync('./weather.json', 'utf8');

        // parse JSON string to JSON object
        const config = JSON.parse(data);
        for (let i = 0; i < config.length; i++) {
            if (config[i].name === res1[0].CITY) {
                config[i].main.feels_like -= 273.15;
                config[i].main.temp -= 273.15;
                config[i].main.temp_max -= 273.15;
                config[i].main.temp_min -= 273.15;
                // console.log(config[i].main);
                const weather = config[i];
                res.status(200).json({
                    weather
                })
                break;
            }
        }
    })
})
// url: /allMountains
// method: post
// params:
app.post('/allMountains', jsonParser, (req, res) => {
    console.log(req.body.loc)
    mysql.allMountains().then(res1 => {
        res.status(200).json({
            res1
        })
        console.log(res1)
    })
})

// url: /postComment
// method: post
// params: fname, loc, score, comment
app.post('/postComment', jsonParser, (req, res) => {
    time = new Date();
    time = time.toLocaleString();
    mysql.insertComment(req.body.fname, req.body.loc, time, req.body.score , req.body.comment).then(res1 => {
        console.log(res1)
        res.status(200).json({
            error: res1
        })
        console.log(res.body)
    })
})
// url: /updateScore
// method: post
// params: loc, score
app.post('/updateScore', jsonParser, (req, res) => {
    mysql.updateScore(req.body.loc, req.body.score).then(res1 => {
        console.log(res1)
        res.status(200).json({
            error: res1
        })
        console.log(res.body)
    })
})

// url: /settingOnload
// method: post
// params: uid
app.post('/settingOnload', jsonParser, (req, res) => {
    console.log(req.body.uid)
    mysql.selectSettingOnload(req.body.uid).then(res1 => {
        res.status(200).json({
             res1
        })
    })
})

// url: /settingUpdate
// method: post
// params: uid, ficusDOBrstName, password, firstName, lastName, phoneNum, email, gender
app.post('/settingUpdate', jsonParser, (req, res) => {
    console.log(req.body.uid)
    req.body.cusDOB = new Date(req.body.cusDOB);
    mysql.updateSetting(req.body.uid, req.body.cusDOB, req.body.password, req.body.firstName, req.body.lastName, req.body.phoneNum, req.body.email, req.body.gender).then(res1 => {
        res.status(200).json({
            res1
        })
    })
})

//------------------------activity------------------------
// url: /activityOnload
// method: post
// params: uid
app.post('/activityOnload', jsonParser, (req, res) => {
    console.log(req.body.uid)
    mysql.selectActivityOnload(req.body.uid).then(res1 => {
        res.status(200).json({
            res1
        })
    })
})
// url: /setActivity
// method: post
// params: uid, userName, emergencyContact, location, startDate, endDate, notes
app.post('/setActivity', jsonParser, (req, res) => {
    console.log(req.body.uid)
    checkIn(req.body.userName,req.body.emergencyContact, req.body.location, req.body.startDate, req.body.endDate)
    req.body.startDate = new Date(dateTransfer(req.body.startDate));
    req.body.endDate = new Date(dateTransfer(req.body.endDate));
    mysql.insertActivity(req.body.uid, req.body.userName, req.body.emergencyContact, req.body.location, req.body.startDate, req.body.endDate, req.body.notes).then(res1 => {
        res.status(200).json({
            res1
        })
    })
})
// url: /finishActivity
// method: post
// params: uid, location, endDate,
app.post('/finishActivity', jsonParser, (req, res) => {
    console.log(req.body.uid)
    checkOut(req.body.userName,req.body.emergencyContact, req.body.location, req.body.endDate)
    mysql.updateActivity(req.body.uid).then(res1 => {
        res.status(200).json({
            res1
        })
    })
})
app.post('/getLoc', jsonParser, (req, res) => {
    console.log(req.body.uid)
    mysql.selectMountainDetailOnload(req.body.loc).then(res1 => {
        res.status(200).json({
            res1
        })
    })
})
// date transfer
function dateTransfer(date) {
    var temp = date.split("/");
    dd = temp[0];
    mm = temp[1];
    yyyy = temp[2];
    return yyyy + "-" + mm + "-" + dd;
}
// method to send email
// sendMail("receiver", "subject", "content")
key = require('./email.json')
var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
smtpTransport = nodemailer.createTransport(smtpTransport({
    host: "smtp.exmail.qq.com",
    port:465,
    auth: {
        user: key.user,
        pass: key.code
    }
}));
var sendMail = function (recipient, subject, html) {
    smtpTransport.sendMail({
        from: key.user,
        to: recipient,
        subject: subject,
        html: html
    }, function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log('发送成功')
    });
}
// send email when checked in
checkIn = function (userName,contact, loc, startDate, endDate) {
    var html = '<p>Dear friend,</p>' +
        '<p>This message is send to from '+userName+' via <strong>WeClimb.com</strong> </p>' +
        '<p>I am going to climb '+loc+' from '+startDate+' to '+endDate+'.</p>' +
        '<p>If you don\'t  receive another email from WeClimb to inform you that I have got back after '+endDate+'.</p>' +
        '<p>Please find me some resecue!</p>' +
        '<p>Thank you very much.</p>' +
        '<p>Best Regards,</p>' +
        '<p> '+userName+' </p>'
    sendMail(contact, userName+"'s travel info", html)
}
// send email when checked out
checkOut = function (userName,contact, loc, endDate) {
    var html = '<p>Dear friend,</p>' +
        '<p>This message is send to from '+userName+' via <strong>WeClimb.com</strong> </p>' +
        '<p>I have got back from '+loc+' on '+endDate+' safely.</p>' +
        '<p>Thank you very much.</p>' +
        '<p>Best Regards,</p>' +
        '<p> '+userName+' </p>'
    sendMail(contact, userName+" is safely back home", html)
}
// when not checked out, send email to emergency contact
emergency = function (userName,contact, loc, endDate) {
    var createConnect = connectSQL();
    createConnect.connect();
    var sql = 'select MountName,STATE from mountains';
    createConnect.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            reject(err);
        }
        result = JSON.parse(JSON.stringify(result));
        // console.log(result);
        resolve(result);
    });
    createConnect.end();
    // var html = '<p>Dear friend,</p>' +
    //     '<p>This message is send to from '+userName+' via <strong>WeClimb.com</strong> </p>' +
    //     '<p>I have not got back from '+loc+' on '+endDate+'.</p>' +
    //     '<p>Please find me some resecue!</p>' +
    //     '<p>Thank you very much.</p>' +
    //     '<p>Best Regards,</p>' +
    //     '<p> '+userName+' </p>'
    // sendMail(contact, userName+" is in danger", html)
}


//最后
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})