var express = require('express');
var router = express.Router();

// New message form on GET
router.get('/new', (req, res, next) => {
  res.send('New message form');
});

module.exports = router;
