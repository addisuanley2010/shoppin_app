const express = require('express')
const products = require("./products");

const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello Ethiopian people!'))

app.get("/products", (req, res) => {
    res.send(products);
});

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Example app listening on port ${port}!`))