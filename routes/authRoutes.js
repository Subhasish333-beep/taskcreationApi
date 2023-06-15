const authController = require('../controllers/authController');
const checkLogin = require('../common')

const router = require('express').Router();

router.post('/register', authController.addEmployee);

router.post('/login', authController.loginEmployee);

router.get('/profile/:id',authController.getProfileDetails)

router.put('/update/:id', authController.updateProfile)

router.post('/changepassword', authController.changePassword)

module.exports = router;