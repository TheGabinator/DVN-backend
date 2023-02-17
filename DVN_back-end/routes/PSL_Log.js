const express = require('express');
const router = express.Router();
const PSL_LogController = require('../controllers/getLogController');


router.get('/', PSL_LogController);

//router.post('/', PSL_LogController );


module.exports = router