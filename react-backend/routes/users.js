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
      var score = 10;
      // Auth types = Open-4, WPA-1, WPA2 - 0
      // Encrypt types = None-4, WEP-3, CCMP - 0, TKIP-2, AES-2
      // RSSI signal >60 - 1, >30 - 2

      //AUTH
      if(networks[i].auth.search("WPA2") >= 0){
        //do nothing, we're good
      }
      else if(networks[i].auth.search("WPA") >= 0){
        score -= 1;
      }
      else{
        score -= 4;
      }

      //ENCRYPT
      if(networks[i].encrypt.search("CCMP") >= 0){
        //do nothing, we're good
      }
      else if (networks[i].encrypt.search("TKIP") >= 0 || networks[i].encrypt.search("AES") >= 0){
        score -= 2;
      }
      else if (networks[i].encrypt.search("WEP") >= 0){
        score -= 3;
      }
      else{
        score -= 4;
      }

      //RSSI
      if((networks[i].rssi*-1) < 30){
        score -= 2;
      }
      else if ((networks[i].rssi*-1) < 60){
        score -= 1;
      }

      tempNetworks.push({
        ssid: networks[i].ssid,
        security: networks[i].auth,
        score: score,
        rssi: networks[i].rssi
      });

      console.log(tempNetworks[i]);
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
