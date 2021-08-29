var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers);
  let id = req.headers['visitorid'];
  res.render('index', { title: 'Express', id, headers: JSON.stringify(req.headers) });
});

module.exports = router;
