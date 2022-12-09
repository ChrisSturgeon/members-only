var express = require('express');
var router = express.Router();
const user_controller = require('../controllers/userController');
const passport = require('passport');
const User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Login form on GET
router.get('/login', user_controller.login_get);

// Login form on POST
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
  })
);

// New User form on GET
router.get('/new', user_controller.user_create_get);

// New User form on Post
router.post('/new', user_controller.user_create_post);

module.exports = router;
