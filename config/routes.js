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
      .delete(artistsController.delete)
      .put(artistsController.update);
router.route('/artists/:id/edit')
      .get(artistsController.edit);

router.route('/api')
      .get(artistsController.api);

module.exports = router;
