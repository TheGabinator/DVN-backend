const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');



const logevents = async (message)=>{

    const messageToLog = `${new Date}\t ${message}\n`

    if(!fs.existsSync(path.join(__dirname, 'logs')))
    {
        fsPromises.mkdir(path.join(__dirname, 'logs'));
    }

    await fsPromises.appendFile(path.join(__dirname, 'logs', 'log.txt'), messageToLog);

}

const logger = (req, res, next)=>{
    logevents("user accessed home page")
    //console.log('Executed the custom middleware');

    next();
}


module.exports = {logevents, logger}