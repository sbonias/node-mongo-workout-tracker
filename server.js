const express = require('express');
const logger = require('morgan');
// require mongoose
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

let MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/workout';

// connect to Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require('./routes/apiRoutes'));
// app.use(require('./routes/view.js'));

// listen
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
