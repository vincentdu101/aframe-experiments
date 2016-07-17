var express = require('express');
var app = express();
var watson = require('watson-developer-cloud');

var speech_to_text = watson.speech_to_text({
  username: '6f80059c-49e1-469e-9d31-62002354ccda',
  password: 'JhNMTPI7TlcD',
  version: 'v1'
});

speech_to_text.getModels(null, function(error, models) {
  if (error)
    console.log('error:', error);
  else
    console.log(JSON.stringify(models, null, 2));
});


// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

app.listen(3000, function(){
	console.log("example app listening on port 3000");
});