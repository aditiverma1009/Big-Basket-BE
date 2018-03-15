const server = require('../../../server');

const options = {
  method: 'POST',
  url: '/products',
};

describe('Testcase for root server', () => {
  test('Should be type object.', (done) => {
    server.inject(options, (response) => {
      expect(typeof (response.payload.data)).toBe(typeof (object));
      done();
    });
  });

  test('Testing for result code', (done) => {
    server.inject(options, (response) => {
      expect(response.result.code).toBe(200);
      done();
    });
  });
}, 50000);
