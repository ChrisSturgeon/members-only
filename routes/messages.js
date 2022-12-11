var express = require('express');
var router = express.Router();
const message_controller = require('../controllers/messageController');

// New message form on GET
router.get('/new', message_controller.new_message_get);

// New message form on POST
router.post('/new', message_controller.new_message_post);

module.exports = router;
