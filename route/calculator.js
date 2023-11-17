const express = require('express');
const router =express.Router();
const calculator = require('../controllers')

router.get('/calculator',calculator.resultController.calculator)

module.exports=router;