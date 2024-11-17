const express = require('express')
const Workout = require('../models/Workout')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutcontroller')

const router = express.Router()

//get all
router.get('/', getWorkouts)

 //get single
router.get('/:id', getWorkout)

 //post
router.post('/', createWorkout
  //  const {title, load, reps} = req.body

  //  try {
  //      const workout = await Workout.create({title, load, reps})
  //      res.status(200).json(workout)

  //  } catch (error) {
  //      res.status(400).json({error: error, message})

  //  }


   // res.json({mssg:'POST new workouts'})
)

//delete
router.delete('/:id', deleteWorkout
)

//UPDATE
router.patch('/:id', updateWorkout)

module.exports = router