const express = require("express");
const router = express.Router();
const db = require('../model/connect')
 const bcrypt = require('bcrypt');
 const getAuthToken=require('../auth/genAuthToken')
 router.get('/', (req, res) => {
    res.send('hello router')
})

router.post('/', (req, res) => {

    const { username, email, password} = req.body
  
    const checkUser = "SELECT `id` FROM `users` WHERE `username` =?";
    const sqlInsert = "INSERT INTO `users`(`username`,`email`, `password`) VALUES (?,?,?)"
    let token="";
    db.query(checkUser, [username], (err, result) => {
        if (err) {
            res.send("error happend")
        }
        else if (result.length > 0) {
            res.send('username already existed!' )
        }
        else {
    
                bcrypt.hash(password, 10).then((hashedPassword) => {
                    db.query(sqlInsert, [username,email,hashedPassword], (err, result) => {
                        if (err)
                            res.json('register failed!' )
                        else
                         token=getAuthToken(req.body);
                            res.send(token)
                    })
        });

            
        }

    })

})


module.exports = router;