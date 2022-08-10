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

checkEmail = function (email) {
    let createConnect = connectSQL();
    createConnect.connect();
    var sql = 'SELECT userNum FROM userinfo where email = ?';
    var tag = createConnect.query(sql, [email], function (err, result) {
        //     if(err){
        //         console.log('[SELECT ERROR] - ',err.message);
        //     } else if (result.length > 0){
        //         flag = true;
        //         return flag;
        //     }else {
        //         flag = false;
        //         return flag;
        //     }
        //     return flag;
        // })
        // return flag;
        return result.length > 0;
    })
    return tag;
}
console.log(checkEmail('1123@gmail.com'))