var app = require('express')();

app.get('/', function(request, response){
  response.send('Ok!');
 
});

module.exports = app;
