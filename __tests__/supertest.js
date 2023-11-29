const request = require('supertest');
const app = require('../server/server.js');

describe('GET /', () => {
  it('responds with status of 200 and content type of text/html', () => {
    request(app).get('/').expect(200).expect('Content-Type', 'text/html');
  });
});

//   .expect(function(res) {
//     if (!res.body.hasOwnProperty('status')) throw new Error("Expected 'status' key!");
//     if (!res.body.hasOwnProperty('message')) throw new Error("Expected 'message' key!");
//   })
//   .end(function(err, res) {
//     if (err) throw err;

//   const request = require('supertest');

// describe('/', function() {
//   it('responds with html', function(done) {
//     request(server)
//       .get('/')
//       .expect('Content-Type', 'text/html')
//       .expect(200)
//       .end(function (err: any, _res: any) {
//         if (err) {
//           console.log('Error in the serving of the static html file.');
//           return done(err);
//         }
//         return done();
//       });
//   });
// });
