const mongoose = require('mongoose')

//{name: "John", id: 1}

const assigneeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    //id will be = to mongodb id
})

module.exports = mongoose.model('Assignee', assigneeSchema)