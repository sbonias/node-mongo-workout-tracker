// require express
const router = require('express').Router();
// require model
const db = require('../models/');
// const Exercise = require('../models/exercise');

// Add new exercises to a new workout plan.

router.post('/workouts', (req, res) => {
  // console.log(req.body);
  db.Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// handles displaying last workout stats on main page

router.get('/workouts', (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Add exercises to a previous workout plan.
router.put('/workouts/:id', (req, res) => {
  db.Workout.update(
    { _id: req.params.id },
    {
      $push: {
        exercises: req.body,
      },
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// View multiple the combined weight of multiple exercises on the `stats` page.

router.get('/workouts/range', (req, res) => {
  db.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(500).json(err);
      }
    });
});

module.exports = router;
