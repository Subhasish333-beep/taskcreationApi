const workController = require('../controllers/workController');

const router = require('express').Router();

router.post('/createtask', workController.addWork);

router.post('/gettasks', workController.getAllWorks);

router.post('/search', workController.searchTasks)

module.exports = router;