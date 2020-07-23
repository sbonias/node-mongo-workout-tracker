const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
      type: String,
  },
  type: {},
  weight: {
      type: Number,
  },
  sets: {
      type: Number,
  },
  reps: {
      type: Number,
  },
  duration: {},
  distance: {},
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
