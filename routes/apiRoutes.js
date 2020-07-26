// require express
const router = require('express').Router();
// require model
const db = require('../models');
// const Exercise = require('../models/exercise');

// Add new exercises to a new workout plan.

router.post('/workouts', (req, res) => {
  console.log(req.body);
  db.Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Add exercises to a previous workout plan.

// View multiple the combined weight of multiple exercises on the `stats` page.

module.exports = router;
