const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  workoutCreated: {
    type: Date,
    default: Date.now,
  },
  exercise: [
    {
      type: {
        type: String,
        required: 'Enter Type of Exercise',
        trim: true,
      },
      name: {
        type: String,
        required: 'Enter Name of Exercise',
        trim: true,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
