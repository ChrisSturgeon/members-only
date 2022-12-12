const async = require('async');
const { body, validationResult, check } = require('express-validator');
const Message = require('../models/message');
const user = require('../models/user');

// Displays new message form
exports.new_message_get = (req, res, next) => {
  res.render('new_message_form', {
    user: req.user,
  });
};

// Processes new mesage form on POST
exports.new_message_post = [
  // Validate and sanitise data
  body('title', 'Title is required').isLength({ min: 1 }).trim().escape(),
  body('content')
    .isLength({ min: 1 })
    .withMessage('Post content required')
    .isLength({ max: 3000 })
    .withMessage('Post must be less than 3000 characters')
    .trim()
    .escape(),

  // Process santised data
  (req, res, next) => {
    // Extract any errors
    const errors = validationResult(req);

    // Create new message object with request data
    const message = new Message({
      title: req.body.title,
      content: req.body.content,
      posted: new Date(),
      userString: req.user.username,
      userID: req.user._id,
    });

    // Check for any errors and return them in form to user
    if (!errors.isEmpty()) {
      res.render('new_message_form', {
        message: message,
        errors: errors.array(),
        user: req.user,
      });
      return;
    } else {
      message.save((err) => {
        if (err) {
          return next(err);
        } else {
          res.redirect('/');
        }
      });
    }
  },
];

exports.all_messages = (req, res, next) => {
  Message.find()
    .sort({ posted: -1 })
    .exec((err, results) => {
      if (err) {
        return next(err);
      }
      res.render('all_messages', {
        messages: results,
        user: req.user,
      });
    });
};
