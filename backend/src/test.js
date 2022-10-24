// connectSQL = function () {
//     var mysql = require('mysql');
//     var connection = mysql.createConnection({
//         host: '192.168.0.122',
//         user: 'william',
//         password: '123456',
//         port: '3306',
//         database: 'csit321'
//     });
//     return connection;
// }



function getWeather() {
    const fs = require('fs');
    const child_process = require('child_process');

    for(var i=0; i<3; i++) {
        var workerProcess = child_process.spawn('python', ['weather_correct.py', i]);

        workerProcess.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });

        workerProcess.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });

        workerProcess.on('close', function (code) {
            console.log('子进程已退出，退出码 '+code);
        });
    }
}
getWeather();
//
// const fs = require('fs');
// const child_process = require('child_process');
//
// for(var i=0; i<3; i++) {
// //创建三个子进程
//     var workerProcess = child_process.exec('weather_correct.py '+i, function (error, stdout, stderr) {
//         if (error) {
//             console.log(error.stack);
//             console.log('Error code: '+error.code);
//             console.log('Signal received: '+error.signal);
//         }
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//     });
//
//     workerProcess.on('exit', function (code) {
//         console.log('子进程已退出，退出码 '+code);
//     });
// }



