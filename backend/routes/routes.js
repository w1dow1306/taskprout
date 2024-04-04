const express = require('express');
const router = express.Router();
const dbcontroller = require('../controllers/dbcontroller')

router.get('/all', dbcontroller.getAlltodos);
router.get('/u/:id', dbcontroller.getIdtodos);
router.post('/create', dbcontroller.createtodo);
router.post('/delete', dbcontroller.deletetodo);


module.exports = router;
