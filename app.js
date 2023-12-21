//import express
const express = require("express")
//import router
const router = require("./routes/api.js")
//membuat objek express
const app = express()

//menggunakan routing (router)
app.use(router)

//mendefinisikan port
app.listen(3000)