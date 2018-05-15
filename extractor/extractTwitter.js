var Twitter = require('twitter');
var fs = require('fs');

 
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
 
var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log(event.user.followers_count + " | " + event.id_str + " | " + event.created_at + " | " + event.user.screen_name);
});
 
stream.on('error', function(error) {
  throw error;
});

