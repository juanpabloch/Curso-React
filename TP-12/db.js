const mysql = require('mysql');

const mysqlOptions = {
    host: 'localhost',  
    user: 'root',  
    password:'',  
    port: 3306,  
    database: 'test' 
}

const util = require('util')

const connection = mysql.createConnection(mysqlOptions)

connection.connect((err)=>{
    if(err)console.log(`Error al conectar base de datos: ${err}`);
    console.log('base de datos mysql conectada')
})

const qy = util.promisify(connection.query).bind(connection)

module.exports = qy;
