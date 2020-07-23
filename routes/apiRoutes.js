// require express
const router = require('express').Router();
// require model
const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

// Add new exercises to a new workout plan.

router.post('/api/workouts', (req, res) => {
  console.log(req.body);

  Workout.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});
// Add exercises to a previous workout plan.

// View multiple the combined weight of multiple exercises on the `stats` page.

module.exports = router;
