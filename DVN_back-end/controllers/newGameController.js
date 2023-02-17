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

    

    connection.query("select * from Game", (err, rows)=>{

        if(err)
        return console.error(`Error: ${err.message}`);
    
        console.log("Data Received from DB");
        //console.log(rows);

        res.json(rows);
    
    })
    


    const game = { TeamA_Name: 'Chiefs', TeamB_Name: 'Pirates', GameDate: new Date() };
    connection.query('INSERT INTO Game SET ?', game, (err, db_res) => {
        if(err) throw err;

        res.json(db_res);
        });



}

module.exports = handleNewUser;