var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.0.122',
    user     : 'william',
    password : '123456',
    port     : '3306',
    database : 'csit321'
});
// var resp1 = "";
exports.loginSelectByEmail = function (email1){
    var promise = new Promise(function (resolve, reject) {
        connection.connect();
        var sql = 'SELECT password,userNum FROM userInfo where email = ?';
        connection.query(sql,[email1],function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            result = JSON.parse(JSON.stringify(result));
            resolve(result[0]);
        });
        connection.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {});
    return promise;
}
exports.registerInsert = function (lastName, firstName, firstPd, birth, email, phoneNumber, gender){
    connection.connect();
    var sql = 'INSERT INTO userInfo (cusDOB, password, firstName, lastName, phoneNum, email, gender) VALUE (?,?,?,?,?,?,?)';
    connection.query(sql,[birth, firstPd, firstName, lastName, phoneNumber, email, gender],function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:',result);
        console.log('-----------------------------------------------------------------\n\n');
    });
    connection.end();
}