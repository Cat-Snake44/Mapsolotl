const request = require('supertest');
//const app = require('../server/server.js');

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with status of 200 and content type of text/html', () => {
        return request('http://localhost:3000')
          .get('/')
          .expect(200)
          .expect('Content-Type', /text\/html/);
      });
    });
  });
});
