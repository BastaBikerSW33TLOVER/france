const express = require('express')
const Workout = require('../models/Workout')
const router = express.Router()

//get all
router.get('/', (req, res) => {
    res.json({mssg:'GET all workouts'})
})
 //get single
router.get('/:id', (req, res) => {
    //req.body
    res.json({mssg:'GET single workouts'})
})
 //post
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({error: error, message})

    }


   // res.json({mssg:'POST new workouts'})
})

//delete
router.delete('/:id', (req, res) => {
    res.json({mssg:'DELETE new workouts'})
})

//UPDATE
router.patch('/:id', (req, res) => {
    res.json({mssg:'UPDATE new workouts'})
})

module.exports = router