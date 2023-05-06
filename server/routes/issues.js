const express = require('express')
const router = express.Router()
const issue = require("../models/issues")

//get all
router.get('/', async (req,res) => {
    try {
        const issues = await Issue.find()
        res.json(issues)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//GET one
router.get('/:id', getIssue, (req, res) => {
    res.json(res.assignee)
})

//POST one
router.post('/', async (req, res) => {
    const issue = new Issue({
        name: req.body.name,
        priority: req.body.priority,
        assign: req.body.assign
    })

    try {
        const newIssue = await issue.save()
        res.status(201).json(newIssue)
    } catch (err) {
        if (issue == undefined) {
            return res.status(404).json({ message: "Cannot find issue" })
        }
        res.status(400).json({message: err.message})

    }
})