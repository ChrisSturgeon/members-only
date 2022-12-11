const async = require('async');
const { body, validationResult, check } = require('express-validator');

// Displays new message form
exports.new_message_get = (req, res, next) => {
  res.render('new_message_form');
};

// Processes new mesage form on POST
exports.new_message_post = [
  // console.log(`Unvalidated string ${req.body.title}`),
  // Validate and sanitise data
  body('title').isLength({ min: 1 }).trim().escape(),
  // console.log(`Validated string ${req.body.title}`),

  (req, res, next) => {
    console.log(req.body.title);
  },
];
