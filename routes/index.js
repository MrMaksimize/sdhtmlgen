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

router.post('/generatehtml', function(req, res) {
  //return res.json(req.body);
  return res.render('pressReleaseRender', req.body);
});

module.exports = router;
