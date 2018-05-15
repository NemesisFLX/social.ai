var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '4q8ywpbx8YwvCInQm7Ep6AVUu',
  consumer_secret: '9JgCR49bSHw9Z8uG68pE6qgpvibdllcRsbxGjkj1qm8NYpnpmh',
  access_token_key: '994599121205059584-LzmoFVumQspZJ6j8haBGXCGa107R7cw',
  access_token_secret: 'aReV4dKvaRAXlezNN5tnU5wlbn0jJIVFkMuf6MgWBckXO'
});
 
var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});

