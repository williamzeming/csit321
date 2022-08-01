const mysql = require("./mysql");
var promise = mysql.selectByUsername();
promise.then(function(result){
    console.log(result);
    if (result!==1){
        console.log("success");
    }
});
console.log(mysql.selectByUsername());