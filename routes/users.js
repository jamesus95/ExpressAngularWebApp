var express = require('express');
var router = express.Router();
var User = require('../bin/Models/UserModel');

/* GET users listing. */
router.get('/', require('connect-ensure-login').ensureLoggedIn(), function(req, res, next) {
    var user = User(req.user);
    res.render('layout', { title: 'Users', user: user, body: "users" });
});

module.exports = router;
