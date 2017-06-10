/**
 * Created by James Murphree on 6/4/2017.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('layout', { title: 'Express', user: undefined, body: "login" });
});

module.exports = router;
