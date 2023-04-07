require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_URI;  
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

app.use(express.json())

const assigneesRouter = require('./routes/assignees.js')
app.use('/assignees', assigneesRouter)

app.listen(5000, () => {console.log("Server started")})