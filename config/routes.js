var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var artistsController = require('../controllers/artists');

router.route('/artists');

module.exports = router;
