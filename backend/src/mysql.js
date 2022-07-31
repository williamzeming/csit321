var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.0.122',
    user     : 'william',
    password : '123456',
    port     : '3306',
    database : 'csit321'
});

connection.connect();
var  sql = 'SELECT * FROM customer';
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result[1]);
    console.log('------------------------------------------------------------\n\n');
});