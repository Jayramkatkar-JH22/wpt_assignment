const url="";
let datab={
    host:"localhost",
    user:"jayram",
    password:"cdac",
    database:"Wptas",
    port:3306
};
const mysql =require('mysql2');
const con=mysql.createConnection(datab);

console.log("Database adventures");