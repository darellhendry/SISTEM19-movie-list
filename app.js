
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));



app.get('/users', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([
    {id:1, username:'darell'},
    {id:2, username:'hendry'}
  ])
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
