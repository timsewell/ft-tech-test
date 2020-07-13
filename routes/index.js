var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
  res.render('index', { title: 'FT Test 2020' });
});

module.exports = router;
