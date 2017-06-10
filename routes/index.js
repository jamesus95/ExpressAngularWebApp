var express = require('express');
var router = express.Router();
var User = require('../bin/Models/UserModel');

/* GET home page. */
router.get('/', require('connect-ensure-login').ensureLoggedIn(), function(req, res, next) {
    var user = User(req.user);
    res.render('layout', {
        title: 'Express',
        user: user,
        body: "index"
    });
});

module.exports = router;
