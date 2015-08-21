//Written by Sweta Karlekar, August 2015, Thomas Jefferson High School 
//credit to twitterdev/sample-angular-node for tutorial and framework

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'STRIDER Twitter Search' });
});

module.exports = router;
