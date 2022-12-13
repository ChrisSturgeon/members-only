const { body, validationResult, check } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Login form on GET
exports.login_get = (req, res, next) => {
  console.log(req.query.error);
  if (req.query.error == 1) {
    res.render('loginForm', {
      loginFaliure: true,
    });
  } else {
    res.render('loginForm');
  }
};

// Login form on POST
exports.login_post = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login?error=1',
  })(req, res, next);
};

// Logout on GET
exports.logout_get = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

// New user form on GET
exports.user_create_get = (req, res, next) => {
  res.render('newUserForm');
};

// New user form on POST
exports.user_create_post = [
  // Validate and sanitise the input data
  body('username', 'Username required').trim().isLength({ min: 1 }).escape(),
  body('password1', 'Password required').trim().isLength({ min: 1 }).escape(),
  body('password2', 'Password required').trim().isLength({ min: 1 }).escape(),

  // Check passwords match
  check('password2', 'Passwords must match').custom(
    (value, { req }) => value === req.body.password1
  ),

  // Process request
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('newUserForm', {
        errors: errors.array(),
      });
      return;
    } else {
      // Check username doesn't already exist
      User.findOne({ username: req.body.username }).exec(
        (err, existing_user) => {
          if (err) {
            return next(err);
          }
          if (existing_user) {
            res.render('newUserForm', {
              usernameError: 'Username already exists',
            });
          } else {
            bcrypt.hash(req.body.password1, 10, (err, hashedPassword) => {
              if (err) {
                return next(err);
              }
              const user = new User({
                username: req.body.username,
                password: hashedPassword,
                joined: new Date(),
                admin: false,
              }).save((err) => {
                if (err) {
                  return next(err);
                }
                res.redirect('/users/success');
              });
            });
          }
        }
      );
    }
  },
];

// Displays success message and login  prompt
exports.register_success = (req, res, next) => {
  res.render('success');
};
