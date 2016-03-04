var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var artistsController = require('../controllers/artists');

router.route('/artists')
      .get(artistsController.index)
      .post(artistsController.create);
router.route('/artists/new')
      .get(artistsController.new);
router.route('/artists/:id')
      .get(artistsController.show)
      .patch(artistsController.update)
      .delete(artistsController.delete);
router.route('/', function(req, res) {
      res.redirect('/artists');
})
router.route('/api')
      .get(artistsController.api);
router.route('/', function(req, res) {
      res.redirect('/artists');
})

module.exports = router;
