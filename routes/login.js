/**
 * Created by HC on 2015/8/10.
 */
var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: '登录'});
});

module.exports = router;
