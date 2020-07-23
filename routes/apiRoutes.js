// require express
const router = require('express').Router();
// require model
const Workout = require('../models/workout');

// based on server.js file this is what a route should look like with use of Mongo
router.post('/api/workout', (req, res) => {
  Workout.create({}).then();
});

module.exports = router;
