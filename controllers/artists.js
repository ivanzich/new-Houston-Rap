var Artist = require('../models/Artist')

var artistsController = {
  index: function(req, res) {
      res.render('artists', {artists:artists});
  },
  create: function(req, res) {
      Artist.create()
  },
  new: function(req, res) {
      res.render('artists/new');
  },
  show: function(req, res) {
      var id = req.params.id;
      Artist.find({_id: id}, function(err, artist) {
      err ? res.redirect('/artists') : res.render('artists/show', {artist: artist})
      })
  },
  update: function(req, res) {

  },
  delete: function(req, res) {

  }
};

module.exports = artistsController;
