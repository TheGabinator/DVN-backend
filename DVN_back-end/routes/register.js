const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registercontroller');


router.get('/', (req, res)=>{
    res.send("Register page")

});

router.post('/',registerController );


module.exports = router