var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('maturity respond with a resource');
});


module.exports = router;
