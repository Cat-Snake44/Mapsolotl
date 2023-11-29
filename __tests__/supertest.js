const request = require('supertest');
//const app = require('../server/server.js');

const local3000 = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with status of 200 and content type of text/html', () => {
        return request(local3000)
          .get('/')
          .expect(200)
          .expect('Content-Type', /text\/html/);
      });
    });
  });
});

describe('trail Mix', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with status of 200 and content type of text/html', () => {
        return request(local3000)
          .get('/api/trails?lat=33.573244&lon=-112.245852&radius=50')
          .expect(200)
          .expect('Content-Type', /application\/json/);
      }, 10000);
    });
  });
});


describe('GET /users', function() {
  it('responds with json', async function() {
    const response = await request(local3000)
      .get('/api/trails?lat=33.573244&lon=-112.245852&radius=50')
      .set('Accept', 'application/json')
    //expect(response.headers["Content-Type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.data).toBeInstanceOf(Array)
  }, 15000);
});