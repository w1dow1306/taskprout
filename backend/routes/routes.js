const express = require('express');
const dbrouter = express.Router();
const usrrouter = express.Router();
const dbcontroller = require('../controllers/dbcontroller')

dbrouter.get('/all', dbcontroller.getAlltodos);
dbrouter.get('/u/:id', dbcontroller.getIdtodos);
dbrouter.post('/create', dbcontroller.createtodo);
dbrouter.post('/delete', dbcontroller.deletetodo);
dbrouter.post('/update', dbcontroller.updatetodo);


module.exports = dbrouter,usrrouter;
