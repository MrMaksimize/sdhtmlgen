var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/form', function(req, res) {
  res.render('pressReleaseForm', {
    title: 'Express'
  });
});

router.get('/generatehtml', function(req, res) {
  //return res.json(req.query);
  return res.render('pressReleaseRender', req.query);
});

module.exports = router;
