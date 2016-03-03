var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/artists');
var Artist = require('../models/Artist');
