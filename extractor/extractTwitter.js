var Twitter = require('twitter');
var fs = require('fs');
var MongoClient = require("mongodb").MongoClient;
var CONFIG = require("./config.json");
var dbName = CONFIG.dbName;
var dbPort = CONFIG.dbPort;
var dbHost = CONFIG.dbHost;
var url = "mongodb://" + dbHost + ":" + dbPort;
 
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
 
var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log(event.user.followers_count + " | " + event.id_str + " | " + event.created_at + " | " + event.user.screen_name);
  MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    var dbo = db.db(dbName);
    dbo.collection(dbCollection).insertOne(createJSON(msg, pairJSON), function (err, res) {
        if (err) {
            throw err;
        }
    });
    db.close();
  });
  console.log(event.user.followers_count + " saved!")
});
 
stream.on('error', function(error) {
  throw error;
});

MongoClient.connect(url, function(err, db) {
  if (err) {
      throw err;
  }
  var dbo = db.db(dbName);
  dbo.createCollection(dbCollection, function(err, res) {
      if (err) {
          throw err;
      }
      //console.log("Collection created!");
      db.close();
  });
});