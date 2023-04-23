const workController = require('../controllers/workController');

const router = require('express').Router();

router.post('/createtask', workController.addWork);

// router.post('/login', authController.loginEmployee)

module.exports = router;