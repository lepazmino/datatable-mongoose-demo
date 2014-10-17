var express = require('express');
var router = express.Router();
var mongo = require('../mongo');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Route to get data from mongo
router.get('/mongo/get/datatable', mongo.getDataForDataTable) //Here's the line that we're looking at specifically


module.exports = router;
