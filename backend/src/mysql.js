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
exports.insertComment = function (name,location,time,score,comments) {
    var promise = new Promise(function (resolve, reject) {
        let createConnect = connectSQL();
        createConnect.connect();
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

exports.updateScore = function (location, score) {
    var promise = new Promise(function (resolve, reject) {
        var createConnect = connectSQL();
        createConnect.connect();
        var sql = 'update mountains set Score = ? where MountName = ?';
        score = (score*19 + 4.9)/20;
        createConnect.query(sql, [score, location], function (err, result) {
            if (err) {
                console.log('[UPDATE ERROR] - ', err.message);
                reject(err);
            }
            resolve("update success");
        });
        createConnect.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {
    });
    return promise;
}

exports.selectMountainDetailOnload = function (location) {
    var promise = new Promise(function (resolve, reject) {
        var createConnect = connectSQL();
        createConnect.connect();
        var sql = 'select * from mountains where MountName = ?';
        createConnect.query(sql, [location], function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                reject(err);
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

exports.selectCommentDetailOnload = function (location) {
    var promise = new Promise(function (resolve, reject) {
        var createConnect = connectSQL();
        createConnect.connect();
        var sql = 'select * from comment where location = ?';
        createConnect.query(sql, [location], function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                reject('No comment');
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

exports.selectSettingOnload = function (uid) {
    var promise = new Promise(function (resolve, reject) {
        var createConnect = connectSQL();
        createConnect.connect();
        var sql = 'select * from userInfo where userNum = ?';
        createConnect.query(sql, [uid], function (err, result) {
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
exports.updateSetting = function (uid,cusDOB, password, firstName, lastName, phone, email, gender) {
    var promise = new Promise(function (resolve, reject) {
        var connection = connectSQL();
        connection.connect();
        var sql = 'UPDATE userInfo SET cusDOB = ?, password = ?, firstName = ?, lastName = ?, phoneNum = ?, email = ?,gender = ? WHERE userNum = ?';
        connection.query(sql, [cusDOB, password, firstName, lastName, phone, email, gender, uid], function (err, result) {
            if (err) {
                console.log('[UPDATE ERROR] - ', err.message);
                resolve("update fail");
            }
            console.log('--------------------------UPDATE----------------------------');
            console.log('UPDATE affectedRows', result.affectedRows);
            resolve("update success");
            console.log('-----------------------------------------------------------------\n\n');
        });
        connection.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {
    });
    return promise;
}
// --------------------------activity--------------------------
exports.insertActivity = function (uid, userName, emergencyContact, location, startDate, endDate, notes) {
var promise = new Promise(function (resolve, reject) {
        let createConnect = connectSQL();
        createConnect.connect();
        var sql1 = 'INSERT INTO activity (userNum, userName, emergencyContact, location, startDate, endDate, notes, active) VALUE (?,?,?,?,?,?,?,?)';
        createConnect.query(sql1,[uid, userName, emergencyContact, location, startDate, endDate, notes, 'active'],function (err, result) {
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

exports.updateActivity = function (uid,location, endDate) {
    var promise = new Promise(function (resolve, reject) {
        var createConnect = connectSQL();
        createConnect.connect();
        var sql = 'update activity set active = ? where userNum = ? and location = ? and endDate = ?';
        createConnect.query(sql, ['inactive', uid, location, endDate], function (err, result) {
            if (err) {
                console.log('[UPDATE ERROR] - ', err.message);
                reject(err);
            }
            resolve("update success");
        });
        createConnect.end();
    });
    promise.then(function (value) {
        return value;
    }, function (value) {
    });
    return promise;
}




