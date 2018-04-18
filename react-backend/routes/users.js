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

    //network format
    /* {  
          ssid: 'BHNTG1682G8822',
          auth: 'WPA2-Personal',
          encrypt: 'CCMP',
          mac: '10:86:8c:b0:88:20',
          rssi: -73.5,
          channel: 1
        }
    */
  });
});

// Testing front end
router.get('/test', function(req, res, next){
  var testNetworks = [];

  testNetworks.push({
    ssid: 'TestNetwork',
    security: 'WEP',
    score: '8'
  });

  testNetworks.push({
    ssid: 'TestNetwork3',
    security: 'None',
    score: '6'
  });

  testNetworks.push({
    ssid: 'TestNetwork2',
    security: 'None',
    score: '3'
  });

  res.json({testNetworks});
});

module.exports = router;
