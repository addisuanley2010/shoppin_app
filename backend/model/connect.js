const mysql = require('mysql2')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    port:'3360',
    database: 'ecommerce'
}) 
con.connect((err) => {
    if (err)
        console.log(err)
    else
        console.log("Connected!");
});

module.exports = con;