var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('org/platforms respond with a resource');
});


module.exports = router;
