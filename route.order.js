var express = require('express');
var router = express.Router();

var orderController = require('./controller.order')

router.get("/exampleOrder", orderController.exampleOrder)

module.exports = router;