var app = require('express')();

app.get('/', function(request, response){
  response.send('Ok!');
});

app.listen(3000);
