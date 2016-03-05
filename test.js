var request = require('supertest');
var app = require('./app');

describe('Requests to the root path', function(done){
  it('Returns a 200 status code', function(done){
    request(app)
      .get('/')
     .expect(200, done);
    });
  it('Returns HTML format', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });
  it('Returns an index file with cities', function(done) {
    request(app)
      .get('/')
      .expect(/cities/i, done);
  });
});

describe('Listing cities on /cities', function(done) {
  it('Returns 200 status code', function(done) {
    request(app)
      .get('/cities')
      .expect(200, done);
    });
  it('Returns JSON format', function(done) {
    request(app)
      .get('/cities')
      .expect('Content-Type', /json/, done);
  });
  it('Returns initial cities',function(done) {
    request(app)
      .get('/cities')
      .expect(JSON.stringify(['Lotopia', 'Caspiana', 'Indigo']), done);
  });
});

describe('Creating new cities', function(done){

  it('Returns 201 status code', function(done){
    request(app)
      .post('/cities')
      .send('name=Springfield&description=where+the+Simpsons+live')
      .expect(201, done);
  });

  it('Adds the city and returns name', function(done){
    request(app)
      .post('/cities')
      .send('name=Springfield&description=where+the+Simpsons+live')
      .expect(/springfield/i, done);
  });

});



