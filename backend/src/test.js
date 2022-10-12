connectSQL = function () {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '192.168.0.122',
        user: 'william',
        password: '123456',
        port: '3306',
        database: 'csit321'
    });
    return connection;
}
emergencyTriger = function () {
    var createConnect = connectSQL();
    createConnect.connect();
    var sql = 'select location, userName, emergencyContact, endDate from activity where active = ?';
    createConnect.query(sql, ["active"], function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
        }
        result = JSON.parse(JSON.stringify(result));
        for (i = 0; i < result.length; i++) {
            result[i].endDate = new Date(result[i].endDate);
            if (result[i].endDate < new Date()) {
                console.log("no");
                // execute the emergency contact
                var html = '<p>Dear friend,</p>' +
                    '<p>This message is send to from ' + result[i].userName + ' via <strong>WeClimb.com</strong> </p>' +
                    '<p>I have not got back from ' + result[i].location + ' on ' + result[i].endDate.toString().split("(")[0] + '.</p>' +
                    '<p>Please find me some resecue!</p>' +
                    '<p>Thank you very much.</p>' +
                    '<p>Best Regards,</p>' +
                    '<p> ' + result[i].userName + ' </p>'
                console.log(html);
                sendMail(result[i].emergencyContact, result[i].userName + " is in danger", html)
            }
        }
    });
    createConnect.end();
}
setInterval(function (){ emergencyTriger()}, 1000*60*60*24);
// emergencyTriger()


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
// key = require('./email.json')
// var nodemailer = require('nodemailer')
// var smtpTransport = require('nodemailer-smtp-transport');
// smtpTransport = nodemailer.createTransport(smtpTransport({
//     host: "smtp.exmail.qq.com",
//     port:465,
//     auth: {
//         user: key.user,
//         pass: key.code
//     }
// }));
// var sendMail = function (recipient, subject, html) {
//     smtpTransport.sendMail({
//         from: key.user,
//         to: recipient,
//         subject: subject,
//         html: html
//     }, function (error, response) {
//         if (error) {
//             console.log(error);
//         }
//         console.log('发送成功')
//     });
// }
// //module.exports = sendMail
// sendMail("418143730@qq.com", "test", "teeqweqweqweqwest")









