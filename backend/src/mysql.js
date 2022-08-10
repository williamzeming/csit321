var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.0.122',
    user     : 'william',
    password : '123456',
    port     : '3306',
    database : 'csit321'
});
// var resp1 = "";
exports.dbConnect1 = function (email1){
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
    });
    promise.then(function (value) {
        return value;
    }, function (value) {});
    return promise;
}