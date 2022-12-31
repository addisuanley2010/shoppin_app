const express = require('express')
const products = require("./products");
const db=require('./model/connect.js');
const cors = require('cors')
const registerUser=require('./routes/registerUser')
const login=require('./routes/login')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello Ethiopian people!'))

app.use('/login',login)
app.use("/register",registerUser)


app.get("/products", (req, res) => {
    res.send(products);
});

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Example app listening on port ${port}!`))