var express = require('express');
var router = express.Router();
var Twit = require('twit');
var config = require('../config');

// instantiate Twit module
var twitter = new Twit(config.twitter);

var TWEET_COUNT = 25;
var MAX_WIDTH = 305;
var OEMBED_URL = 'statuses/oembed';
var SEARCH_URL = 'search/tweets';

/**
 * GET tweets json.
 */
router.get('/search/:q', function(req, res) {
  //console.log('entered router from tweets.js');
  var oEmbedTweets = [], tweets = [],

  params = {
    q: req.params.q, // the user id passed in as part of the route
    count: TWEET_COUNT // how many tweets to return
  };

  // the max_id is passed in via a query string param
  if(req.query.max_id) {
    params.max_id = req.query.max_id;
  }

  // request data 
  twitter.get("search/tweets", params, function (err, data, resp) {
    //console.log('data is null ' + (data == null))
    tweets = data.statuses; 
    //console.log(tweets);

    //console.log("tweet length " + tweets.length);
    var i = 0, len = tweets.length;

    for(i; i < len; i++) {
      //console.log("tweets " + i + " " + tweets[i]);
      getOEmbed(tweets[i]);
    }
  });

  /**
   * requests the oEmbed html
   */
  function getOEmbed (tweet) {

    // oEmbed request params
    var params = {
      "id": tweet.id_str,
      "maxwidth": MAX_WIDTH,
      "hide_thread": true,
      "omit_script": true
    };

    // request data 
    twitter.get(OEMBED_URL, params, function (err, data, resp) {
      tweet.oEmbed = data;
      oEmbedTweets.push(tweet);

      // do we have oEmbed HTML for all Tweets?
      if (oEmbedTweets.length == tweets.length) {
        res.setHeader('Content-Type', 'application/json');
        res.send(oEmbedTweets);
      }
    });
  }
});

module.exports = router;
