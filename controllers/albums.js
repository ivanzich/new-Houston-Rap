var Album = require('../models/Album');
var Artist = require('../models/Artist');

var albumsController = {

    new: function (req, res) {
      var id = req.params.id;
      Artist.findById({_id: id}, function(err, artist) {
        // console.log("show page is working")
        // console.log(artist);
      err ? res.redirect('/artists/:id') : res.render('albums/new', {artist: artist})
    });
    },
    create: function (req, res) {
      var albumbody = req.body;
      var albumname = req.body.name;
      var albumcover = req.body.albumcover;
      var albumsongcount = req.body.songCount;
      var albumyearrelease = req.body.yearReleased;
      var artistid = req.body.artistid;
      Album.create(albumbody, function(err, album){
          if (err) {
            console.log("didn't create album");
            res.redirect('/');
          }
          else {
            console.log(album);
            Artist.findById({_id: artistid}, function(err, artist){
              err ? console.log("didn't work") : artist.albums.push(album);
              res.redirect('/artists/artistid');
            });

          }

      });

    },
    edit: function (req, res) {

    },
    update: function (req, res) {

    },
    delete: function (req, res) {

    }


}

module.exports = albumsController;
