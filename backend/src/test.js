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

const fs = require('fs');
const data = fs.readFileSync('./weather.json', 'utf8');

// parse JSON string to JSON object
const config = JSON.parse(data);

for (let i = 0; i < config.length; i++) {
    // console.log(config[i].name);
    console.log(config[i].weather[0].main);
}


// for (let i = 0; i < config.length; i++) {
//     if (config[i].name === 'Canberra') {
//         config[i].main.feels_like -= 273.15;
//         config[i].main.temp -= 273.15;
//         config[i].main.temp_max -= 273.15;
//         config[i].main.temp_min -= 273.15;
//         console.log(config[i].main);
//         break;
//     }
// }













