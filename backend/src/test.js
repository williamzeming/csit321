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
//
// checkEmail = function (email) {
//     var promise = new Promise(function (resolve, reject) {
//         let createConnect = connectSQL();
//         createConnect.connect();
//         var sql = 'SELECT count(*) FROM userInfo where email = ?';
//         createConnect.query(sql,[email],function (err, result) {
//             if(err){
//                 console.log('[SELECT ERROR] - ',err.message);
//
//             }
//             result = JSON.parse(JSON.stringify(result));
//             resolve(result[0]['count(*)']);
//         });
//         createConnect.end();
//     });
//     promise.then(function (value) {
//         return value;
//     }, function (value) {});
//     return promise;
// }
// checkEmail('112w233@gmail.com').then(res => {
//     console.log(res)
// })

// function sendEmail(me,name, email,location,startDate,endDate,message) {
//     const nodemailer = require('nodemailer');
//
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com', port: 465, secure: true, // use SSL
//         auth: {
//             user: 'deltaness118@gmail.com', pass: 'uviorgbzohwemzbj'
//         }
//     });
//
//     var mailOptions = {
//         from: '"We Climb" <deltaness118@gmail.com>', // sender address
//         to: email, // list of receivers
//         subject: me+"'s trip to "+location, // Subject line
//         text: 'Hello '+name+
//             ":\nIt is me, "+me+". "
//             +message+
//             " \nfrom "+ startDate+
//             " \nuntil "+ endDate +". "+
//             "\nIf my trip goes right, you will receive another email to indicate you that I have back. "+
//             "If not, please contact the police for help."
//         // html: '<b>Hello world!</b>' // html body
//     };
//
//     transporter.sendMail(mailOptions, function(error, info){
//         if(error){
//             return console.log(error);
//         }
//         console.log('Message sent: ' + info.response);
//     });
// }
// sendEmail("James","Lydia","xingjian_lee@126.com","Melbourne","2018-01-01","2018-01-10","I'm going to Melbourne for 10 days")

updateSetting = function (userNum,cusDOB, password, firstName, lastName, phone, email, gender){
    var connection = connectSQL();
    connection.connect();
    var sql = 'UPDATE userInfo SET cusDOB = ?, password = ?, firstName = ?, lastName = ?, phoneNum = ?, email = ?,gender = ? WHERE userNum = ?';
    connection.query(sql, [cusDOB, password, firstName, lastName, phone, email, gender,userNum], function (err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------UPDATE----------------------------');
        console.log('UPDATE affectedRows', result.affectedRows);
        console.log('-----------------------------------------------------------------\n\n');
    });
}
updateSetting(28,"1998-01-01","1234567","Zihao","Luo","0411223344","luozihao@gmail.com",'male')















