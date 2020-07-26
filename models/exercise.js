const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  workoutCreated: {
    type: Date,
    default: Date.now,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: 'Enter Name of Exercise',
    trim: true,
  },
  type: {
    type: String,
    required: 'Enter Type of Exercise',
    trim: true,
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
