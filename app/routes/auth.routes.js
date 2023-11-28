const authController = require('../controllers/auth.controller');
const router = require('express').Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.signInUser);

module.exports = router;