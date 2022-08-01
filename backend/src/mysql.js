exports.dbConnect = function (){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '192.168.0.122',
        user     : 'william',
        password : '123456',
        port     : '3306',
        database : 'csit321'
    });

    connection.connect();
    var  sql = 'SELECT * FROM userInfo';
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');
    });
}
// var resp1 = "";
exports.dbConnect1 = function (){
    var promise = new Promise(function (resolve, reject) {
     // resp1 = "";
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '192.168.0.122',
        user     : 'william',
        password : '123456',
        port     : '3306',
        database : 'csit321'
    });

    connection.connect();
    var  sql = 'SELECT email FROM userInfo';
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        result = JSON.parse(JSON.stringify(result));
        resolve(result[0].email);
    });
    });
    promise.then(function (value) {
        return value;
    }, function (value) {});
    return promise;
}