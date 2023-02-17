const express = require('express');
const cors = require('cors');
const fsPromise = require('fs').promises;
const {logger} = require('./middleware/logenvents');
const path = require('path');
const about = require('./about');
const users = require('./model/users.json');
const register = require('./routes/register');
const PSL_Log = require('./routes/PSL_Log');
const new_game = require('./routes/newGame');
const result = require('./routes/result');
const team = require('./routes/team');

const app = express();
app.use(cors());

const Port = process.env.PORT || 4000;

const a = 1000;
const b = 2000;

//custom middleware

//app.use(logger)



app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));


app.use('/about', about);
app.use('/psllog', PSL_Log);
app.use('/newgame', new_game);
app.use('/result', result);
app.use('/team', team);


app.get('/', (req, res)=>{
    console.log(users);
    console.log(`User is: ${req.user}`);


    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(Port, ()=> console.log('Server up and running'));