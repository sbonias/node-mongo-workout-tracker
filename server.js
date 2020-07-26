const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

let MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb://user1:password1@ds041526.mlab.com:41526/heroku_l7q124j4';

// connect to Mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// create routes
// require('./routes/apiRoutes')(app);
// app.use(require('./routes/apiRoutes'));
// app.use(require('./routes/htmlRoutes'));
// require('./routes/htmlRoutes')(app);
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listen
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
