// require
const mysql = require('mysql');
// configuracoes de conexao
const connection = mysql.createConnection({
    host:'localhost',
    port:3307,
    user:'root',
    password:'admin',
    database:'agenda-petshop'
});
module.exports = connection;