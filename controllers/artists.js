var Artist = require('../models/Artist')

var artistsController = {
  index: function(req, res) {
      res.render('artists');
  },
  create: function(req, res) {

  },
  new: function(req, res) {
      res.render('artists/new');
  },
  show: function(req, res) {

  },
  update: function(req, res) {

  },
  delete: function(req, res) {

  }
};

module.exports = artistsController;
