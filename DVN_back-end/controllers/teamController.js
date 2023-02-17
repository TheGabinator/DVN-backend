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

    let query = "select TeamName, PL, (Total_Goals_Scored- Total_Goals_Allowed) as GD, Points from Team order by Points desc"
   
    ///*  connection.query("select * from Team order by Points desc", (err, rows)=>{
    connection.query(query, (err, rows)=>{

        if(err)
        return console.error(`Error: ${err.message}`);
    
        console.log("Data Received from DB");
        //console.log(rows);

        res.json(rows);
    
    })
    //*/
    

    /*
    const Team = { TeamName: 'Pirates', Points: 5, PL:3, Total_Goals_Scored: 4, Total_Goals_Allowed:1 };
    connection.query('INSERT INTO Team SET ?', Team, (err, db_res) => {
        if(err) throw err;

        res.json(db_res.insertId);
        });

        */


}

module.exports = handleNewUser;