const authController = require('../controllers/authController');

const router = require('express').Router();

router.post('/register', authController.addEmployee);

router.post('/login', authController.loginEmployee)

module.exports = router;