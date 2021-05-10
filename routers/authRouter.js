const router = require('express').Router();

const { login, Signup } = require('../controllers/authController');

router.post('/login', login);
router.post('/signup', Signup);

module.exports = router;