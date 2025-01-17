require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.get('/', async (req, res) => {
    // res.sendFile(path.join(__dirname, '/index.html'));

    console.log(`Hello World Application is running on port ${process.env.PORT}`)
    res.send("Hello World Application");
    res.status(200).end();

})

app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})
