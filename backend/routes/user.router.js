const router = require('express').Router();
const User = require('../models/user.mongo.js');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/data').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });
  newUser.save()
    .then(() => res.json(`${username} - username added `))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;