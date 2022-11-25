const express = require('express')
const userrouter = require('./router/users')
const app = express()
const port = 3000
const connectDB  = require('./config/db')
const { connect } = require('mongoose')
// diarahkan kefile db kita

// ini ditambah pas create data, lewat postman
app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// biar app kita bisa baca inputan dari form


app.get('/', (req, res) => {
  res.send('Hello World!')
})
// '/'itu url di postmannya, nanti akan mengirim string hello world


app.use(userrouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})