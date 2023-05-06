const mongoose = require('mongoose')

//{name: "John", id: 1}

const assigneeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Assignee', assigneeSchema)