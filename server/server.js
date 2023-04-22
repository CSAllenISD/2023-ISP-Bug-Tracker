require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => console.log("connected to db"))

app.use(express.json())

const assigneesRouter = require('./routes/assignees')
app.use('/assignees', assigneesRouter)

app.listen(5000, () => {console.log("Server started")})