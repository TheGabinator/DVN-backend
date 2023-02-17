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

    
    /*
    connection.query("select * from Result", (err, rows)=>{

        if(err)
        return console.error(`Error: ${err.message}`);
    
        console.log("Data Received from DB");
        //console.log(rows);

        res.json(rows);
    
    })
    */

    
    const result = { TeamA_Goals: 2, TeamB_Goals: 0, GameID: 1, Result: 'TeamA Win' };
    connection.query('INSERT INTO Result SET ?', result, (err, db_res) => {
        if(err) throw err;

        res.json(db_res.insertId);
        });


}

module.exports = handleNewUser;