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
        checkEmail(email1).then(res => {
          if (res == 0) {
              console.log("email not exists")
          }else{
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
          }
        })
    });
    //resolve 作为promise 返回值
    promise.then(function (value) {
        return value;
    }, function (value) {});
    return promise;
}
exports.registerInsert = function (lastName, firstName, firstPd, birth, email, phoneNumber, gender){
    checkEmail(email).then(res => {
        if (res == 0) {
            let createConnect = connectSQL();
            createConnect.connect();
            var sql = 'INSERT INTO userInfo (cusDOB, password, firstName, lastName, phoneNum, email, gender) VALUE (?,?,?,?,?,?,?)';
            createConnect.query(sql,[birth, firstPd, firstName, lastName, phoneNumber, email, gender],function (err, result) {
                if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                }
            });
            createConnect.end();
        }else{
            console.log("email already exists")
        }
    })
}
checkEmail = function (email) {
    var promise = new Promise(function (resolve, reject) {
        let createConnect = connectSQL();
        createConnect.connect();
        var sql = 'SELECT count(*) FROM userInfo where email = ?';
        createConnect.query(sql,[email],function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);

            }
            result = JSON.parse(JSON.stringify(result));
            resolve(result[0]['count(*)']);
        });
        createConnect.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {});
    return promise;
}

// console.log(checkEmail('112233@gmail.com'));