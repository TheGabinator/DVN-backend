const express = require('express');
const router = express.Router();
const NewGameController = require('../controllers/newGameController');


router.get('/', NewGameController);

//router.post('/', PSL_LogController );


module.exports = router