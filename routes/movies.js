var express = require('express');
var router = express.Router();

var movieController = require('../controllers/movieController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Movie home page');
});

router.get('/all', movieController.getAllMovies);

router.post('/add', movieController.addNewMovies);

router.get('/:movieName', movieController.getMovie);

module.exports = router;
