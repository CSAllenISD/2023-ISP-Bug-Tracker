const express = require('express')
const router = express.Router()
const Assignee = require("../models/assignees")

//GET all
router.get('/', async (req, res) => {
   try{
    const assignees = await Assignee.find()
    res.json(assignees)
   } catch (err) {
    res.status(500).json({message: err.message})
   }
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
        res.status(400).json({message: err.message})

    }
})


//Boiler plate
// //GET ONE
// router.get('/:id', (req, res) => {
//     res.send(req.params.id) //only returns id that is given
// })


// //PATCH one
// router.patch('/:id', (req, res) => {

// })

// //DELETE one
// router.delete('/:id', (req, res) => {

// })

module.exports = router