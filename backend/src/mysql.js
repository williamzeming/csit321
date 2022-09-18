const mysql = require('mysql');
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

exports.loginSelectByEmail = function (email1) {
    var promise = new Promise(function (resolve, reject) {
        checkEmail(email1).then(res => {
            if (res == 0) {
                console.log("email not exists")
                resolve(400);
            } else {
                let createConnect = connectSQL();
                createConnect.connect();
                var sql = 'SELECT password,userNum,firstName FROM userInfo where email = ?';
                createConnect.query(sql, [email1], function (err, result) {
                    if (err) {
                        console.log('[SELECT ERROR] - ', err.message);
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
    }, function (value) {
    });
    return promise;
}
exports.registerInsert = function (lastName, firstName, firstPd, birth, email, phoneNumber, gender) {
    var promise = new Promise(function (resolve, reject) {
        checkEmail(email).then(res => {
            if (res == 0) {
                let createConnect = connectSQL();
                createConnect.connect();
                var sql = 'INSERT INTO userInfo (cusDOB, password, firstName, lastName, phoneNum, email, gender) VALUE (?,?,?,?,?,?,?)';
                createConnect.query(sql, [birth, firstPd, firstName, lastName, phoneNumber, email, gender], function (err, result) {
                    if (err) {
                        console.log('[INSERT ERROR] - ', err.message);
                        return;
                    }else{
                        console.log('insert success');
                        resolve("insert success");
                    }
                });
                createConnect.end();
            } else {
                console.log("email already exists")
                resolve("already exists");
            }
        })
    });
    promise.then(function (value) {
        return value;
    }, function (value) {
    });
    return promise;
}
checkEmail = function (email) {
    var promise = new Promise(function (resolve, reject) {
        let createConnect = connectSQL();
        createConnect.connect();
        var sql = 'SELECT count(*) FROM userInfo where email = ?';
        createConnect.query(sql, [email], function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);

            }
            result = JSON.parse(JSON.stringify(result));
            resolve(result[0]['count(*)']);
        });
        createConnect.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {
    });
    return promise;
}
exports.popularSelect = function () {
    var promise = new Promise(function (resolve, reject) {
        let createConnect = connectSQL();
        createConnect.connect();
        var sql = 'SELECT MountName, CITY, STATE FROM mountains order by Score desc limit 3';
        createConnect.query(sql, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            result = JSON.parse(JSON.stringify(result));
            resolve(result);
        });
        createConnect.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {
    });
    return promise;
}
exports.insertComment = function (uid,location,time,score,comments) {
    var promise = new Promise(function (resolve, reject) {
        var name = "James";
        let createConnect = connectSQL();
        createConnect.connect();
        // get userNum
        var sql = 'SELECT firstName FROM userInfo where userNum = ?';
        createConnect.query(sql,[uid],function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
            }
            result = JSON.parse(JSON.stringify(result));
            name = result[0]['firstName'];
        });
        var sql1 = 'INSERT INTO comment (userName,location,time,score,comments) VALUE (?,?,?,?,?)';
        createConnect.query(sql1,[name,location,time,score,comments],function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                resolve("insert fail");
            }
            console.log('insert success');
            resolve("insert success");
        });
        createConnect.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {
    });
    return promise;
}
exports.selectDetailOnload = function (location) {
    var promise = new Promise(function (resolve, reject) {
        var createConnect = connectSQL();
        createConnect.connect();
        var sql = 'select coordinates,m.Score,userName,location,time,c.score,comments from comment c , mountains m where c.location = m.MountName and m.MountName = ?';
        createConnect.query(sql, [location], function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            result = JSON.parse(JSON.stringify(result));
            // console.log(result);
            resolve(result);
        });
        createConnect.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {
    });
    return promise;
}

// promise template
// var promise = new Promise(function (resolve, reject) {
//
// });
// promise.then(function (value) {
//     return value;
// }, function (value) {
// });
// return promise;