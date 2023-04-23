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
    res.json(res.assignee)
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

//Del one
router.delete('/:id', getAssignee, async (req, res) => {
    try {
        await res.assignee.deleteOne()
        res.json({message: "Successfully Deleted"})
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

async function getAssignee(req, res, next) {
    let assignee
    try {
        assignee = await Assignee.findById(req.params.id)
        if (assignee == null) {
            return res.status(404).json({message: "Cannot find assignee"})
        }
    } catch(err) {
        if (assignee == null) {
            return res.status(404).json({message: "Cannot find assignee"})
        }
        return res.status(500).json({ message: err.message })
    }

    res.assignee = assignee
    next()
}

module.exports = router