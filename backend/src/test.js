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