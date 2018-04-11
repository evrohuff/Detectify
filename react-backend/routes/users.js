var express = require('express');
var scanner = require('node-wifi-scanner');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var tempNetworks = [];

  scanner.scan((err, networks) => {
    if (err) {
      console.error(err);
      return;
    }

    for (var i in networks){
      console.log(networks[i]);
      tempNetworks.push(networks[i]);
    }
    res.json({tempNetworks});
  });
});

module.exports = router;
