const express = require('express'),
 chirpsRouter = require('./chirps'),
  usersRouter = require('./users');

let router = express.Router();

router.use('/chirps', chirpsRouter);
router.use('/users', usersRouter);

module.exports = router;

