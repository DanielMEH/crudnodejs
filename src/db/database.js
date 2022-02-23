const mysql = require("mysql");

const connectMysql= mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"task",
    charset:"utf8",
    port:3306
})

connectMysql.connect(function(err){

    if (err) {
        
        console.log(err)
        return;
    }else{
       console.log("estas conectado a  la base de datos")
    }
})

module.exports = connectMysql;