var express = require('express');
var router = express.Router();

let userController = require('../controller/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create',UserController.create)

module.exports = router;
