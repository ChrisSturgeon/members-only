var express = require('express');
var router = express.Router();
const user_controller = require('../controllers/userController');

// Login form routing on GET
router.get('/login', user_controller.login_get);

// Login form routing on POST
router.post('/login', user_controller.login_post);

// Log out form routing on GET
router.get('/logout', user_controller.logout_get);

// New User form routing on GET
router.get('/new', user_controller.user_create_get);

// New User form routing on POST
router.post('/new', user_controller.user_create_post);

// Success registration page
router.get('/success', user_controller.register_success);

module.exports = router;
