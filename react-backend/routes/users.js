var express = require('express');
var scanner = require('node-wifi-scanner');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  scanner.scan((err, networks) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(networks);
  });

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "test"
  }, {
  	id: 2,
  	username: "test2"
  }]);
});

module.exports = router;
