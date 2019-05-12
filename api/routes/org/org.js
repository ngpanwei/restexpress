var express = require('express');
var router = express.Router();

var unitsRouter = require('./units');
var categoriesRouter = require('./categories');
var platformsRouter = require('./platforms');
var tribesRouter = require('./tribes');
var squadsRouter = require('./squads');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('org respond with a resource');
});

router.use('/units', unitsRouter);
router.use('/categories', categoriesRouter);
router.use('/platforms', platformsRouter);
router.use('/tribes', tribesRouter);
router.use('/squads', squadsRouter);

module.exports = router;
