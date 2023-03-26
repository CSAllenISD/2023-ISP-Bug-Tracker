const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"assignees": [{name: "Brook", id: 1 }, {name: "Rafid", id: 2}]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})