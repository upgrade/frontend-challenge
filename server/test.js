const request = require('supertest');
const app = require('.');

const error = err => {
  if (err) throw err;
};

request(app)
  .get('/api/colors')
  .expect('Content-Type', /json/)
  .expect(200, ['black', 'blue', 'green', 'red', 'white'])
  .end(error);

request(app)
  .get('/api/submit')
  .expect(404)
  .end(error);

request(app)
  .post('/api/submit')
  .send({
    name: 'Foo',
    password: 'foo',
    email: 'foo@bar.ca',
    color: 'blue',
    terms: true
  })
  .expect(200)
  .end(error);

request(app)
  .post('/api/submit')
  .send({
    name: 'Error',
    password: 'foo',
    email: 'foo@bar.ca',
    color: 'blue',
    terms: true
  })
  .expect(400)
  .end(error);

// Missing field.
request(app)
  .post('/api/submit')
  .send({
    name: 'Error',
    email: 'foo@bar.ca',
    color: 'blue',
    terms: true
  })
  .expect(400)
  .end(error);

  // Empty field.
request(app)
  .post('/api/submit')
  .send({
    name: '',
    email: 'foo@bar.ca',
    color: 'blue',
    terms: true
  })
  .expect(400)
  .end(error);
