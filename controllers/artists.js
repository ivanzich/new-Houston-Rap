var Artist = require('../models/Artist')

var artistsController = {
  index: function(req, res) {
      Artist.find({}, function(err, artists) {
        res.render('artists', {artists:artists});
      })
  },
  new: function(req, res) {
      res.render('artists/new');
  },
  create: function(req, res) {
      var artistparams = req.body
      Artist.create(artistparams, function(err, artist){
        err ? res.redirect('/artist/new') : res.render('artists/show', {artist: artist})
      });
  },
  show: function(req, res) {
      var id = req.params.id;
      Artist.findById({_id: id}, function(err, artist) {
        console.log("show page is working")
        console.log(artist);
      err ? res.redirect('/artists') : res.render('artists/show', {artist: artist})
      })
  },
  update: function(req, res) {

  },
  delete: function(req, res) {

  },
  api: function(req, res) {
    Artist.find({}, function(err, artist) {
      res.json(artist)
    })
  }
};

module.exports = artistsController;
// module.exports = albumsController;
