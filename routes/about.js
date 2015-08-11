/**
 * Created by XM on 2015/8/10.
 */
var express = require('express'),
    router = express.Router(),
    TITLE_REG = '关于';

router.get('/', function(req, res) {
    res.render('reg',{title:TITLE_REG});
});

module.exports = router;