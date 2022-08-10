const mysql      = require('mysql');
connectSQL = function () {
    const connection = mysql.createConnection({
        host: '192.168.0.122',
        user: 'william',
        password: '123456',
        port: '3306',
        database: 'csit321'
    });
    return connection;
}

exports.loginSelectByEmail = function (email1){
    var promise = new Promise(function (resolve, reject) {
        let createConnect = connectSQL();
        createConnect.connect();
        var sql = 'SELECT password,userNum FROM userInfo where email = ?';
        createConnect.query(sql,[email1],function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            result = JSON.parse(JSON.stringify(result));
            resolve(result[0]);
        });
        createConnect.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {});
    return promise;
}
exports.registerInsert = function (lastName, firstName, firstPd, birth, email, phoneNumber, gender){
    let createConnect = connectSQL();
    createConnect.connect();
    var sql = 'INSERT INTO userInfo (cusDOB, password, firstName, lastName, phoneNum, email, gender) VALUE (?,?,?,?,?,?,?)';
    createConnect.query(sql,[birth, firstPd, firstName, lastName, phoneNumber, email, gender],function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        // console.log('--------------------------INSERT----------------------------');
        // //console.log('INSERT ID:',result.insertId);
        // console.log('INSERT ID:',result);
        // console.log('-----------------------------------------------------------------\n\n');
    });
    createConnect.end();
}
checkEmail = function (email){
    let createConnect = connectSQL();
    createConnect.connect();
    var sql = 'SELECT userNum FROM userInfo where email = ?';
    createConnect.query(sql,[email],function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return false;
        } else {
            return true;
        }
    })
}
if(checkEmail('112233@gmail.com')==true){
    console.log('true')
}
// console.log(checkEmail('112233@gmail.com'));