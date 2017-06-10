/**
 * Created by James Murphree on 6/4/2017.
 */

var express = require('express');
var router = express.Router();

router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/login');
});

module.exports = router;