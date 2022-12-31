const express = require("express");
const router = express.Router();
const db = require('../model/connect')
const bcrypt = require("bcrypt")
const genAuthToken = require("../auth/genAuthToken");
// const { validateToken } = require("../middleware/AuthMiddleware");



router.get('/', (req, res) => {
   
res.send({response:"successed!"})

})

router.post('/',  (req, res) => {
    const { username, password } = req.body
    const data =  ("SELECT * FROM `users` WHERE `username`=?")
    db.query(data, [username], (err, result) => {
        if (err) {
            res.send(err)
        }

        else if (result == '') {
            res.send({
                error: "user not found!"
            })
        }
        else {
            bcrypt.compare(password, result[0].password).then((match) => {
                if (!match) {
                    res.send({
                        error: "wrong username passoword combination!"
                    })
                }
                else {
                    const accessToken = genAuthToken(result[0]);

                    res.send(accessToken)
                }
            })

        }
    })

})


module.exports = router;