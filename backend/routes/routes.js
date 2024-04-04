const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/all', controller.getAlltodos);


module.exports = router;
