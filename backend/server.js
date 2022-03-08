const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercise.router.js');
const usersRouter = require('./routes/user.router.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/exercise', exercisesRouter);
app.use('/user', usersRouter);

require('dotenv').config();
const mongouri = process.env.URI;
mongoose.connect(mongouri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});