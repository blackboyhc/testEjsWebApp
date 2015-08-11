
 var express = require('express'),
 router = express.Router(),
 TITLE_REG = 'Hu10';

 /* GET home page.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: TITLE_REG});
});

module.exports = router;
