const bcrypt = require('bcrypt');
require('dotenv').config();



const handleNewUser =  async(req, res)=>{
    const password = req.body.password;
    const username = req.body.username;

    const hashedPwd = await bcrypt.hash(password, 10);

    pwdtoCompare = "testing123";
    const match = await bcrypt.compare(pwdtoCompare, hashedPwd);
    //console.log(result);

    if(match)
    {
        const accessToken = jwt.sign(
            {"username": username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "2m"});
        //res.json({"success":"true"});

        const refreshToken = jwt.sign(
            {"username": username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: "1d"});

        res.cookie('jwt', refreshToken, { httpOnly:true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({accessToken});
    }
    else
    {
        res.status(401).send('unauthorised access')
        //res.status(401).send(`password encrypted: ${hashedPwd}`);

    }

    

}

module.exports = handleNewUser;