const mongoose = require('mongoose')

//{id: uuid4(), name: name, priority: priority, assign: assign }

const assigneeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    priority: {
        type: String,
        required: true
    },

    assign: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Assignee', assigneeSchema)