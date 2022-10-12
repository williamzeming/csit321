// connectSQL = function () {
//     var mysql = require('mysql');
//     var connection = mysql.createConnection({
//         host: '192.168.0.122',
//         user: 'william',
//         password: '123456',
//         port: '3306',
//         database: 'csit321'
//     });
//     return connection;
// }

// const fs = require('fs');
// const data = fs.readFileSync('./weather.json', 'utf8');
//
// // parse JSON string to JSON object
// const config = JSON.parse(data);
//
// for (let i = 0; i < config.length; i++) {
//     // console.log(config[i].name);
//     console.log(config[i].weather[0].main);
// }


// for (let i = 0; i < config.length; i++) {
//     if (config[i].name === 'Canberra') {
//         config[i].main.feels_like -= 273.15;
//         config[i].main.temp -= 273.15;
//         config[i].main.temp_max -= 273.15;
//         config[i].main.temp_min -= 273.15;
//         console.log(config[i].main);
//         break;
//     }
// }


// import key from './email.json' assert { type: 'json' };
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
//module.exports = sendMail
sendMail("418143730@qq.com", "test", "teeqweqweqweqwest")









