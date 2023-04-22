const express = require('express')
const router = express.Router()
const Assignee = require("../models/assignees")

//GET all
router.get('/', async (req, res) => {
   try {
    const assignees = await Assignee.find()
    res.json(assignees)
   } catch (err) {
    res.status(500).json({message: err.message})
   }
})

//GET one
router.get('/:id', getAssignee, (req, res) => {
    res.send(req.subscriber.name)
})

//POST one
router.post('/', async (req, res) => {
    const assignee = new Assignee({
        name: req.body.name
    })

    try {
        const newAssignee = await assignee.save()
        res.status(201).json(newAssignee)
    } catch (err) {
        if (subscriber == undefined) {
            return res.status(404).json({ message: "Cannot find subscriber" })
        }
        res.status(400).json({message: err.message})

    }
})

// router.delete('/:id', (req, res) => {
// })

async function getAssignee(req, res, next) {
    let assignee
    try {
        assignee = await Assignee.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: "Cannot find assignee"})
        }
    } catch(err) {
        return res.status(500).json({ message: err.message })
    }

    res.assignee = assignee
    next()
}

module.exports = router