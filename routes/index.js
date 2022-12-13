var express = require('express');
var router = express.Router();

// Forward to all messages as homepage
router.get('/', function (req, res, next) {
  res.redirect('/messages/all');
});

module.exports = router;
