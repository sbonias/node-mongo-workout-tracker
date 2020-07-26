const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  workoutCreated: {
    type: Date,
    default: Date.now,
    unique: true,
    required: true,
  },
  exercise: [
    {
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
    },
  ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
