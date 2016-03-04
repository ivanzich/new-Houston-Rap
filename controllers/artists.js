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
    var id = req.params.id;
    Artist.findById({_id: id}, function(err, artist){
      if(err) {
        res.json(err);
      }
    
      if (req.body.name) { 
         artist.name = req.body.name;

      }
      if (req.body.album) {
          artist.album = req.body.album;
      }

      if (req.body.bio) {
          artist.bio = req.body.bio;
      }

      if (req.body.photo_url) {
          artist.photo_url = req.body.photo_url;
      }
          
          artist.save(function(err)  { 
            if(err) { res.json(err);
            }


            res.redirect('/artists/show');

          });
      
              
        });

    },



  
  delete: function(req, res) {
    var_id = req.params.id;

    Artist.remove ({_id: id}, function(err) {
       if(err)  res.json({message: "Could not delete artist:  "+ err});

       res.json({message: "Artist succesfully deleted"});


     });


  



  },
  api: function(req, res) {
    Artist.find({}, function(err, artist) {
      res.json(artist)
    })

  }
};

module.exports = artistsController;
// module.exports = albumsController;
