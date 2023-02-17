const mysql = require('mysql2');
require('dotenv').config();



const handleNewUser =  async(req, res)=>{
   
    let connection = mysql.createConnection({
        host:process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME
    });

    connection.connect((err)=>{

        if(err)
         return console.error(`Error: ${err.message}`);
    
        console.log("Connected to mysql successfully");
    
    });

    connection.query("select * from team", (err, rows)=>{

        if(err)
        return console.error(`Error: ${err.message}`);
    
        console.log("Data Received from DB");
        //console.log(rows);

        res.json(rows);
    
    })



}

module.exports = handleNewUser;